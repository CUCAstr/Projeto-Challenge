document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  form.addEventListener("submit", function (e) {
    const emailVal = email.value.trim();
    const senhaVal = senha.value.trim();

    if (!emailVal || !senhaVal) {
      e.preventDefault(); // Bloqueia envio se algum campo estiver vazio
      alert("Por favor, preencha todos os campos.");
    }
    else if (senhaVal.length < 6) {
      e.preventDefault(); // Bloqueia envio se senha for menor que 6 caracteres
      alert("A senha deve ter pelo menos 6 caracteres.");
    }
  });
});
