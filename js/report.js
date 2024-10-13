function verificarVazio(id) {
    if (!document.getElementById(id).value) {
        return true;
    }
    return false;
}

async function baixarRelatorio(e) {
    e.preventDefault();

    if (verificarVazio("inicial")) {
        alert("O campo de data inicial está vazio!");
        return;
    }

    if (verificarVazio("final")) {
        alert("O campo de data final está vazio!");
        return;
    }

    const inicial = document.getElementById("inicial").value;
    const final = document.getElementById("final").value;

    console.log(inicial);
    console.log(final);
    
    if (final < inicial) {
        alert("Verifique a ordem das datas!");
        return;
    }

    const response = await fetch("http://127.0.1:3000/report", {
        method: "POST",
        body: JSON.stringify({
            inicial,
            final
        }),
        headers: {"Content-Type": "application/json"}
    });

    if (response.status === 200) {
        console.log("Executando o download...");
    } else {
        console.log("Falha ao executar o download!");
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", baixarRelatorio);