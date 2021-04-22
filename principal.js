var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = document.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = document.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = document.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdimc.textContent = imc;

var pesoValido = true;
var alturaValida = true;



if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    pesoValido = false;
    tdimc.textContent = "Peso inválido!";
}
if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida");
    alturaValida = false;
    tdimc.textContent = "Altura inválida!";

}
if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdimc.textContent = imc;

}
if (altura <= 0 || altura >= 3.0 && peso <= 0 || peso >= 1000) {
    console.log("Mais de um valor inválido!");
    alturaValida = false;
    pesoValido = false;
    tdimc.textContent = "Mais de um valor inválido!";

}