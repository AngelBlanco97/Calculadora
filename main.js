
var cuenta= [];

window.setInterval(() => {
    var entrada = document.getElementById("entrada");
    try {
        entrada.scrollBy(100,0)
    } catch (error) {
        stop;
    }
}, 1)



function sumar() { 
    let accion = "+";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;


    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = input + accion;
    }

}


function restar() { 
    let accion = "-";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = input + accion;
    }

}

function multiplicar() { 
    let accion = "x";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = input + accion;
    }

}
function dividir() { 
    let accion = "÷";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = input + accion;
    }

}


function igualar(){
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    if (input == "0" || input ==""){
        cuenta.length = 0;
    } else { 
        var accion = cuenta[1];
        var entrada = document.getElementById("entrada");
        var input = entrada.innerHTML;
        var array = input.split(accion);
        cuenta.push(array[1]);
        actualizacion();
    }
}

function raizCuadrada() { 
    let accion = "√";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = accion + input;
    }

}

function seno() { 
    let accion = "sen";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = accion + input;
    }

}

function coseno() { 
    let accion = "cos";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = accion + input;
    }

}

function tangente() { 
    let accion = "tan";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = accion + input;
    }

}

function cotangente() {
    let accion = "cot";

    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    cuenta.push(input);
    cuenta.push(accion);

    if (input == "" || input == "0") {
        entrada.innerHTML = accion;
    } else {
        entrada.innerHTML = accion + input;
    }
}

function actualizacion() {
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;
    var labelCuenta = document.getElementById("labelCuenta");

    try {
        
        var num1 = cuenta[0];
        var num2 = cuenta[2];
        var acc = cuenta[1];
        var switche = ""

        num1 = numSinComas(num1);
        num2 = numSinComas(num2);

        for (var i = 0; i < acc.length; i++) {
            switche = switche + acc.charAt(i);
        }
        } catch (error) {
            desconfiguracion();
        }

    switch (switche) {
        case "+":
            labelCuenta.innerHTML = input;
            resultado = (parseFloat(num1) + parseFloat(num2));
            aprox = Number((resultado).toFixed(8));
            aprox = numCommas(aprox);
            entrada.innerHTML = aprox
            
            break;
        case '-':
            labelCuenta.innerHTML = input;
            resultado = (parseFloat(num1) - parseFloat(num2));
            aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox
            break;
        case 'x':
            labelCuenta.innerHTML = input;
            resultado = (parseFloat(num1) * parseFloat(num2));
            aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox
            break;
        case '÷':
            labelCuenta.innerHTML = input;
            resultado = (parseFloat(num1) / parseFloat(num2));
            aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox
            break;
        case '√':
            if (num1 == 0) {
                labelCuenta.innerHTML = input;
                resultado = Math.sqrt(num2);
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            } else {
            labelCuenta.innerHTML = input;
            resultado = Math.sqrt(num1);
            aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox;
            }
            break;
        case 'sen':
            if (num1 == 0){
                labelCuenta.innerHTML = input;
                resultado = Math.sin(num2 *(Math.PI / 180))
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            } else {
                labelCuenta.innerHTML = input;
            resultado = Math.sin(num1 *(Math.PI / 180))
            aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox;
            }
            break;
        case "cos":
            if (num1 == 0) {
                labelCuenta.innerHTML = input;
                resultado = Math.cos(num2 *(Math.PI / 180))
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            } else {
                labelCuenta.innerHTML = input;
                resultado = Math.cos(num1 *(Math.PI / 180))
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            }
            break;
        case "tan":
            if (num1 == 0) {
                labelCuenta.innerHTML = input;
                resultado = Math.tan(num2 *(Math.PI / 180));
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            } else{
                labelCuenta.innerHTML = input;
                resultado = Math.tan(num1 *(Math.PI / 180))
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            }
            break;
        case "cot":
            if (num1  == 0 ) {
                labelCuenta.innerHTML = input;
                resultado = 1 / (Math.tan(num2));
                aprox = Number((resultado).toFixed(8));
            entrada.innerHTML = aprox;
            } else{
                labelCuenta.innerHTML = input;
                resultado = 1 / (Math.tan(num1));
                aprox = Number((resultado).toFixed(8));
                entrada.innerHTML = aprox;
            }
            break;
    }

    cuenta.length = 0;
}

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

function setDecimales() {
    var entrada = document.getElementById("entrada");
    var input = entrada.innerHTML;

    if (input == "0" || input == "") {
        entrada.innerHTML = "0.";
    } else {
        entrada.innerHTML = input + ".";
    }
}

function vaciarCuentas() { 
    var entrada = document.getElementById("entrada");
    entrada.innerHTML = "0";

    var labelCuenta = document.getElementById("labelCuenta");
    labelCuenta.innerHTML = "";

    cuenta.length = 0;
}


const numCommas = ( number ) => {
    return number
    .toString()
    .replace(
        /\B(?=(\d{3})+(?!\d))/g, ","
        );
}

const numSinComas = (number) => {
    try {
        return number
        .toString()
        .replace(
            /,/g, ""
        )
    } catch (error) {
        return ""
    }
}


function desconfiguracion(){ 
    var entrada = document.getElementById("entrada");
    var labelCuenta = document.getElementById("labelCuenta");
    labelCuenta.innerHTML = "";
    entrada.innerHTML = "Syntax Error"
}

