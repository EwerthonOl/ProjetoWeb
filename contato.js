function enviarMensagem() {
  //https://api.whatsapp.com/send?phone=5588997542121&text=oiiiiiii

  var nomeContato = document.getElementById("nomeContato").value;

  var assuntoContato = document.getElementById("assuntoContato").value;

  var mensagemContato = document.getElementById("mensagemContato").value;

  window.location.href = `https://api.whatsapp.com/send?phone=SEUNUMEROAQUI&text=Nome: \n${nomeContato} \n\nAssunto:\n ${assuntoContato} \n\n Mensagem:\n ${mensagemContato}`;
}
