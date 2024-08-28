//Mostra um alerta dizendo que foi enviado a mensagem
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    //Limpar o formulário após o envio
    this.reset();
});
