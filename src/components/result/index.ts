import { state } from "../../state";

customElements.define(
  "result-comp",
  class ResultComp extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.className = "result-title";

      if (this.getAttribute("label") == "player") {
        div.innerHTML = `
          <h2>Ganaste!</h2>
        `;
        div.style.backgroundColor = "green";
      }
      if (this.getAttribute("label") == "tie") {
        div.innerHTML = `
          <h2>Empate!</h2>
        `;
        div.style.backgroundColor = "lightblue";
      }
      if (this.getAttribute("label") == "computer") {
        div.innerHTML = `
        <h2>Perdiste!</h2>
        `;
        div.style.backgroundColor = "red";
      }

      style.innerHTML = `
        .result-title h2{
          margin: 0;
          color: white;
          text-align: center;
          font-family: "Odibee Sans";
          font-size: 55px;
          border: solid black;
          padding: 10px;
        }
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
);
