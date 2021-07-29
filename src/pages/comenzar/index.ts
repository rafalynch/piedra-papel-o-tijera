import { state } from "../../state";

const fondoURL = require("url:../../images/fondo.png");

export function initComenzar(param) {
  const comenzarContainer = document.createElement("div");
  comenzarContainer.className = "comenzar-container";

  // Descripcion
  const descripcionContainer = document.createElement("div");
  descripcionContainer.className = "descripcion-container";
  descripcionContainer.innerHTML = `
  <h3 class="instructions">Presioná jugar <br/>
  y elegí: piedra, <br/> papel o tijera <br/> antes de que <br/> pasen los 3 <br/> segundos.</h3>
  `;
  comenzarContainer.appendChild(descripcionContainer);

  // Boton de empezar
  const jugarButton = document.createElement("custom-button");
  jugarButton.className = "jugar-button";
  jugarButton.innerHTML = "¡Jugar!";
  jugarButton.addEventListener("click", (e) => {
    state.setPlayerMove("");
    param.goTo("/juego");
  });
  comenzarContainer.appendChild(jugarButton);

  // Iconos de manos
  const iconosContainer = document.createElement("div");
  iconosContainer.className = "iconos-container";

  const iconoPapel = document.createElement("papel-comp");
  iconoPapel.className = "icono-papel";
  iconosContainer.appendChild(iconoPapel);

  const iconoPiedra = document.createElement("piedra-comp");
  iconoPiedra.className = "icono-piedra";
  iconosContainer.appendChild(iconoPiedra);

  const iconoTijera = document.createElement("tijera-comp");
  iconosContainer.appendChild(iconoTijera);
  iconoTijera.className = "icono-tijera";

  comenzarContainer.appendChild(iconosContainer);

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background: url("${fondoURL}") repeat;
    }
    .comenzar-container {
      display: grid;
      justify-content: center;
    }
    .jugar-button {
      margin: 25px auto 25px; 
    }
    .descripcion-container {
      margin-top: 15px;
      font-family: "American Typewriter";
    }
    .instructions {
      color: black;
      font-size: 40px;
      margin: 0;
      font-family: "American Typewriter"; 
      text-align: center;
    }
    .iconos-container{
      display: flex;
      justify-content: center;
      gap: 35px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    .icono-papel, .icono-tijera, .icono-piedra {
      transform: translateY(25%);
    }
  `;
  comenzarContainer.appendChild(style);

  // devolver el elemento
  return comenzarContainer;
}
