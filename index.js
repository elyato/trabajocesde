const button = document.getElementById("prueba");
const cristiano = document.querySelector(".cristiano");
const biografia = document.querySelector(".biografia");

function ocultarMostrar() {
  button.addEventListener("click", () => {
    cristiano.style.display = "none";
    biografia.style.display = "flex";
  });
  console.log(cristiano);
}
