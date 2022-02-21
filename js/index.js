"use strict";
const documentReady = () => {

    
  const btnEnviar = document.getElementById("btnPrincipal-enviar");
  const calculador = document.getElementById("calculador");
  const MNcalculador = document.getElementById("MNcalculador");

  let mueveReloj = () => {
    let relojHoras = window.document.getElementById("relojHoras");

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let horaActual = hours + " : " + minutes + " : " + seconds;

    relojHoras.innerHTML = `${horaActual}`;
  };
  setInterval(mueveReloj, 1000);

  const enviardatos = (e) => {
    e.preventDefault();

    const name = document.querySelector("#nombrePersona").value;
    const genero = document.querySelector("#generoPersona").value;
    const saludoContainer = document.querySelector("#saludo-container");
    const nameContainer = document.querySelector("#name-container");
    const inicio = document.getElementById("inicio");
    let estilosmain = document.getElementById("main");

        estilosmain.style.display = "block";

    switch (genero) {
      case "masculino":
        estilosmain.style.backgroundColor = "#003C9E";
        estilosmain.style.color = "#2477FF";
        break;
      case "femenino":
        estilosmain.style.backgroundColor = "#C6611B";
        estilosmain.style.color = "#F0B800";
        break;
      case "otro":
        estilosmain.style.backgroundColor = "#208EAB";
        estilosmain.style.color = "#00EE12";
      default:
        break;
    }
    nameContainer.innerHTML = `Wellcome, ${name}`;
    saludoContainer.innerHTML = `<img src="./img/panda.png" alt="pandasaludo" width="200rem"></img>`;
    inicio.style.display = "none";
  };

  const calcular = (e) => {
    e.preventDefault();

    const numero1 = parseInt(document.querySelector("#numero1").value);
    const operador = document.querySelector("#operador").value;
    const numero2 = parseInt(document.querySelector("#numero2").value);
    const contenedorError = document.querySelector("#contenedorError");
    const contenedorResultado = document.querySelector("#contenedorResultado");
    if (isNaN(numero1) || isNaN(numero2)) {
      contenedorError.innerHTML = "Completa formulario";
    } else {
      let resultado;
      contenedorError.innerHTML = "";
      switch (operador) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
        default:
          break;
      }
      contenedorResultado.innerHTML = resultado;
    }
  };

  const calcularMayornumero = (e) => {
    e.preventDefault();
    const numero1 = parseInt(document.querySelector("#MNnumero1").value);
    const numero2 = parseInt(document.querySelector("#MNnumero2").value);
    const contenedorResultado = document.querySelector(
      "#MNcontenedorResultado"
    );
    if (isNaN(numero1) || isNaN(numero2)) {
      contenedorError.innerHTML = "Completa formulario";
    } else {
      let mayornumero;
      if (numero1 > numero2) {
        mayornumero = numero1;
        contenedorResultado.innerHTML = `El mayor de los números es: ${mayornumero}`;
      } else if (numero2 > numero1) {
        mayornumero = numero2;
        contenedorResultado.innerHTML = `El mayor de los números es: ${mayornumero}`;
      } else {
        contenedorResultado.innerHTML = `Los numeros ingresados son iguales`;
      }
    }
  };

  MNcalculador.addEventListener("click", calcularMayornumero);

  calculador.addEventListener("click", calcular);

  btnEnviar.addEventListener("click", enviardatos);
};
document.addEventListener("DOMContentLoaded", documentReady);
alert("Coloca tus datos");