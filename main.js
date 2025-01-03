
const form = document.getElementById("formContato");
const tabelaContatos = document.getElementById("tabelaContatos");
const btnCadastrar = document.getElementById("cadastrar");

btnCadastrar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();


    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>`;
    tabelaContatos.appendChild(novaLinha);
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
});
