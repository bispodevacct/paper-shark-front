// Função para verificar se um input está vazio
function verificaVazio(id) {
    if (!document.getElementById(id).value) {
        return true;
    }
    return false;
}

// Função para zerar um input numérico
function zeraInput(id) {
    document.getElementById(id).value = 0;
}


function calculaValor() {
    if (verificaVazio("qtd_col")) {
        zeraInput("qtd_col");
    };

    if (verificaVazio("qtd_pb")) {
        zeraInput("qtd_pb");
    };

    const qtd_col = document.getElementById("qtd_col").value;
    const qtd_pb = document.getElementById("qtd_pb").value;

    return value = qtd_col * 0.5 + qtd_pb * 0.25;
}

function atualizaValor() {
    const value = calculaValor();

    const value_element = document.getElementById("value");

    value_element.innerHTML = value.toFixed(2).replace(".", ",");
}

const qtd_col_input = document.getElementById("qtd_col");
qtd_col_input.addEventListener("change", atualizaValor);

const qtd_pb_input = document.getElementById("qtd_pb");
qtd_pb_input.addEventListener("change", atualizaValor);