import { state } from "../../state";
const fondoURL = require("url:../../images/fondo.png");

export function initJuego(param) {
  const juegoContainer = document.createElement("div");
  juegoContainer.className = "juego-container";

  // Contador
  const timerContainer = document.createElement("p");
  timerContainer.innerHTML = "Go!";
  timerContainer.className = "timer-container";
  juegoContainer.appendChild(timerContainer);
  let counter = 3;
  const intervalo = setInterval(() => {
    document.querySelector(".timer-container").innerHTML = counter.toString();
    counter--;
    if (counter < 0) {
      clearInterval(intervalo);
      console.log(state.getState());
      processGame();
    }
  }, 1000);

  // Iconos de manos
  const iconosContainer = document.createElement("div");
  iconosContainer.className = "iconos-container";

  // PAPEL
  const iconoPapel = document.createElement("papel-comp");
  iconoPapel.className = "icono-papel";
  iconosContainer.appendChild(iconoPapel);
  iconoPapel.addEventListener("click", (e) => {
    const target = e.target as Element;
    document
      .querySelector(".icono-piedra")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    document
      .querySelector(".icono-tijera")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    target.parentElement.setAttribute("style", "transform: translateY(15%)");
    target.setAttribute("style", "transform: translateY(0%)");
    state.setPlayerMove("papel");
  });

  // PIEDRA
  const iconoPiedra = document.createElement("piedra-comp");
  iconoPiedra.className = "icono-piedra";
  iconosContainer.appendChild(iconoPiedra);
  iconoPiedra.addEventListener("click", (e) => {
    const target = e.target as Element;
    document
      .querySelector(".icono-papel")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    document
      .querySelector(".icono-tijera")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    target.parentElement.setAttribute("style", "transform: translateY(15%)");
    target.setAttribute("style", "transform: translateY(0%)");
    state.setPlayerMove("piedra");
  });

  // TIJERA
  const iconoTijera = document.createElement("tijera-comp");
  iconosContainer.appendChild(iconoTijera);
  iconoTijera.className = "icono-tijera";
  iconoTijera.addEventListener("click", (e) => {
    const target = e.target as Element;
    document
      .querySelector(".icono-papel")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    document
      .querySelector(".icono-piedra")
      .setAttribute("style", "transform: translateY(25%); opacity: 0.5;");
    target.parentElement.setAttribute("style", "transform: translateY(15%)");
    target.setAttribute("style", "transform: translateY(0%)");
    state.setPlayerMove("tijera");
  });

  juegoContainer.appendChild(iconosContainer);

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background: url("${fondoURL}") repeat;
    }
    .juego-container {
      display: grid;
      justify-content: center;
    }
    .timer-container {
      margin-top: 200px;
      font-family: "American Typewriter";
      font-size: 200px;
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
  juegoContainer.appendChild(style);

  // procesar el juego y resultados
  function processGame() {
    if (state.getState().currentGame.playerMove) {
      const randomMove = Math.floor(Math.random() * (4 - 1) + 1);
      state.setComputerMove(randomMove);
      param.goTo("/show");

      const currentPlayerMove = state.getState().currentGame.playerMove;
      const currentComputerMove = state.getState().currentGame.computerMove;
      const result = state.whoWins(currentPlayerMove, currentComputerMove);
      state.changeHistory(result);
    } else {
      param.goTo("/comenzar");
    }
  }

  // devolver el elemento
  return juegoContainer;
}
