var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);
    tdimc.textContent = imc;

    var pesoValido = true;
    var alturaValida = true;


    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoValido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.0) {
        console.log("Altura inválida");
        alturaValida = false;
        tdimc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");

    }
    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;

    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}