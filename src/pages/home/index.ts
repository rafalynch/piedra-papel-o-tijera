const fondoURL = require("url:../../images/fondo.png");

export function initHome(param) {
  const homeContainer = document.createElement("div");
  homeContainer.className = "home-container";

  // Titulo
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";
  titleContainer.innerHTML = `
  <h1 class="title">Piedra, <br/> Papel<span class="title-o"> ó </span> <br/> Tijera</h1>
  `;
  homeContainer.appendChild(titleContainer);

  // Boton de empezar
  const startButton = document.createElement("custom-button");
  startButton.className = "start-button";
  startButton.innerHTML = "Empezar";
  startButton.addEventListener("click", (e) => {
    param.goTo("/comenzar");
  });

  homeContainer.appendChild(startButton);

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

  homeContainer.appendChild(iconosContainer);

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      background: url("${fondoURL}") repeat;
    }
    .home-container {
      display: grid;
      justify-content: center;
    }
    .start-button {
      margin: 25px auto 25px; 
    }
    .title-container {
      margin-top: 15px;
      px;
      font-family: "American Typewriter";
    }
    .title {
      color: #009048;
      font-size: 80px;
      margin: 0;
      font-family: "American Typewriter";
    }
    .title-o  {
      color: #91CCAF;
      font-size: 80px;
      margin: 0;
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
  homeContainer.appendChild(style);

  // devolver el elemento
  return homeContainer;
}
