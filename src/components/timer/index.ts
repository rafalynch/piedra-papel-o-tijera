customElements.define(
  "custom-timer",
  class CustomTimer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const timerEl = document.createElement("div");
      timerEl.className = "timer";
      timerEl.innerHTML = `
        ${this.innerHTML}
      `;

      const style = document.createElement("style");
      style.innerHTML = `
        .timer {
          font-family: 'Odibee Sans', cursive;
          color: black;
          font-size: 45px;
        }
      `;
      shadow.appendChild(timerEl);
      shadow.appendChild(style);
    }
  }
);
