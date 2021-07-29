const fondoURL = require("url:../../images/fondo.png");
import { state } from "../../state";

export function initShowMoves(param) {
  const showContainer = document.createElement("div");
  showContainer.className = "show-container";

  const iconosArray = [
    {
      nombre: "piedra",
      componente: "piedra-comp",
    },
    {
      nombre: "papel",
      componente: "papel-comp",
    },
    {
      nombre: "tijera",
      componente: "tijera-comp",
    },
  ];

  const playerMove = state.getState().currentGame.playerMove;
  const computerMove = state.getState().currentGame.computerMove;
  const result = state.whoWins(playerMove, computerMove);

  // Icono de Computer
  const iconoComputerContainer = document.createElement("div");
  iconoComputerContainer.className = "icono-computer";
  for (const i of iconosArray) {
    if (computerMove == i.nombre) {
      iconoComputerContainer.innerHTML = `
        <${i.componente}></${i.componente}>
      `;
    }
  }

  // Icono de Player
  const iconoPlayerContainer = document.createElement("div");
  iconoPlayerContainer.className = "icono-player";
  for (const i of iconosArray) {
    if (playerMove == i.nombre) {
      iconoPlayerContainer.innerHTML = `
        <${i.componente}></${i.componente}>
      `;
    }
  }

  showContainer.appendChild(iconoComputerContainer);
  showContainer.appendChild(iconoPlayerContainer);

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background: url("${fondoURL}") repeat;
    }
    .show-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icono-computer {
      transform: rotate(180deg) scale(2.5);
      position: fixed;
      top: 0;
      margin: auto;
    }
    .icono-player {
      transform: scale(2.5);
      position: fixed;
      bottom: 0;
      margin: auto;
    }
  `;
  showContainer.appendChild(style);

  setTimeout(() => {
    const resultStats = document.createElement("div");
    resultStats.style.display = "grid";
    resultStats.style.justifyItems = "center";
    resultStats.style.gap = "20px";

    resultStats.innerHTML = `
      <result-comp label="${result}"></result-comp>
    `;
    const score = document.createElement("score-comp");
    resultStats.style.position = "absolute";
    resultStats.style.top = "60px";
    resultStats.appendChild(score);

    const volverButton = document.createElement("custom-button");
    volverButton.className = "volver-button";
    volverButton.innerHTML = "Volver a jugar";
    volverButton.addEventListener("click", (e) => {
      param.goTo("/comenzar");
    });
    resultStats.appendChild(volverButton);

    showContainer.appendChild(resultStats);
  }, 2500);

  // devolver el elemento
  return showContainer;
}
