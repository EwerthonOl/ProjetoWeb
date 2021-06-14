function adicionarNoMural() {
  var nomeMural = document.getElementById("nomeMural").value;

  var mensagemMural = document.getElementById("formM").value;

  if (nomeMural == "" || mensagemMural == "") {
    alert("Nome ou Mensagem esta sem texto");
  } else {
    var div = document.createElement("div");

    var hash = Math.floor(Math.random() * 9999999);

    div.className = "mural";

    div.id = hash;

    div.innerHTML = `<h1>${nomeMural}</h1>
                   <p id="textoMural">${mensagemMural}<p>
                   <button onclick="deletarPost(${hash})" id="butExcluir">Excluir</button>
                   <hr id="linha">`;

    document.getElementById("posts").appendChild(div);
  }
}

function deletarPost(x) {
  document.getElementById(x).outerHTML = "";
}
