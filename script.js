// Validação do Login
$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        const email = $("#email").val();
        const senha = $("#senha").val();

        if (email === "admin@example.com" && senha === "123456") {
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("E-mail ou senha incorretos!");
        }
    });
});

// Efeitos no carrossel (opcional)
$('.carousel').carousel({
    interval: 3000
});
