var modal = document.getElementById("myModal");

var btn = document.getElementById("creditos");

var btn2 = document.getElementById("creditos2");

var btn3 = document.getElementById("creditos3");

var span = document.getElementsByClassName("close")[0];

btn3.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
