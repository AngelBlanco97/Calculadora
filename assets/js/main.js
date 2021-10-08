
var cuenta= [];

function setCero() {
    let numero = 0; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}



function setUno() {
    let numero = 1; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setDos() {
    let numero = 2; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setTres() {
    let numero = 3; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setCuatro() {
    let numero = 4; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setCinco() {
    let numero = 5; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setSeis() {
    let numero = 6; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setSiete() {
    let numero = 7; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setOcho() {
    let numero = 8; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}

function setNueve() {
    let numero = 9; 
    
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    if (input == "" || input == "0") {
        entrada.innerHTML = numero;
    } else {
        entrada.innerHTML = input + numero;
    }
}






function quitarDigito(){
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    restar = input.split("");
    restar.pop();

    var textoFinal = "";
    if (input == "0" || input == "") {
        entrada.innerHTML = "0";
    } else{
    for (var i=0 ; i < restar.length; i ++) {
        var digito = restar[i];
        textoFinal = textoFinal+digito;
    }
    entrada.innerHTML = textoFinal;
}
    
}    



function vaciarCuentas() { 
    var entrada = document.getElementById("entrada");
    entrada.innerHTML = "0";
}