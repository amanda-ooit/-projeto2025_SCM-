document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <strong>Cadastro realizado!</strong><br>
    Nome: ${nome} <br>
    Email: ${email}
  `;
});