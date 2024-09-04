// Função para verificar se um input está vazio
function verificarVazio(id) {
    if (!document.getElementById(id).value) {
        return true;
    }
    return false;
}

// Função para zerar um input numérico
function zerarInput(id) {
    document.getElementById(id).value = 0;
}


function calcularValor() {
    if (verificarVazio("qtd_col")) {
        zerarInput("qtd_col");
    };

    if (verificarVazio("qtd_pb")) {
        zerarInput("qtd_pb");
    };

    const qtd_col = document.getElementById("qtd_col").value;
    const qtd_pb = document.getElementById("qtd_pb").value;

    return value = qtd_col * 0.5 + qtd_pb * 0.25;
}

function atualizarValor() {
    const value = calcularValor();

    const value_element = document.getElementById("value");

    value_element.innerHTML = value.toFixed(2).replace(".", ",");
}

async function registrarImpressao(e) {
    e.preventDefault();

    if (verificarVazio("cliente")) {
        alert('O campo "cliente" está vazio!');
        return;
    }

    if (verificarVazio("responsavel")) {
        alert('O campo "responsável" está vazio!');
        return;
    }

    const cliente = document.getElementById("cliente").value;
    const responsavel = document.getElementById("responsavel").value;
    const motivo = document.getElementById("motivo").value;
    const qtd_col = Number(document.getElementById("qtd_col").value);
    const val_col = qtd_col * 0.5;
    const qtd_pb = Number(document.getElementById("qtd_pb").value);
    const val_pb = qtd_pb * 0.25;
    const mtd_pgto = document.getElementById("metodo").value;
    const val_total = val_col + val_pb;

    if (qtd_col === 0 && qtd_pb === 0) {
        alert('Não é possível registrar impressões zeradas!');
        return 0;
    }

    let envio = confirm("Se o pagamento foi efetuado e as informações estão corretas, clique em ok! Caso contrário, cancelar.");

    if (!envio) {
        return;
    }

    const response = await fetch("https://localhost:3000/add", {
        method: "POST",
        body: JSON.stringify({
            cliente,
            responsavel,
            motivo,
            qtd_col,
            val_col,
            qtd_pb,
            val_pb,
            mtd_pgto,
            val_total
        }),
        headers: {"Content-Type": "application/json"}
    });

    if (response.status === 200) {
        alert("Registro efetuado com sucesso!");
    } else {
        alert("Erro ao efetuar o registro.");
    }
}

const qtd_col_input = document.getElementById("qtd_col");
qtd_col_input.addEventListener("change", atualizarValor);

const qtd_pb_input = document.getElementById("qtd_pb");
qtd_pb_input.addEventListener("change", atualizarValor);

const form = document.getElementById("form");
form.addEventListener("submit", registrarImpressao);