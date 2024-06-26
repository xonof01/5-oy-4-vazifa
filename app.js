const yangiliklartex = document.getElementById("yangiliklartex");
const image = document.getElementById("image");

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("button1").addEventListener("click", function () {
  image.setAttribute('src', './images/najot.jpg') 
  changeBackground("lightgreen");

  yangiliklartex.style.color = "red";
});

document.getElementById("button2").addEventListener("click", function () {
  image.setAttribute("src", "./images/najot3.jpg");
  changeBackground("hwb(180 58% 10%)");
});

document.getElementById("button3").addEventListener("click", function () {
  image.setAttribute("src", "./images/registration.webp");
  changeBackground("orange");
});
