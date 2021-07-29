customElements.define(
  "custom-button",
  class CustomButton extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const btn = document.createElement("div");
      shadow.innerHTML = `
        <button class="btn">${this.innerHTML}</button>
      `;
      const style = document.createElement("style");
      style.innerHTML = `
        .btn {
          font-family: 'Odibee Sans', cursive;
          color: white;
          font-size: 45px;
          background-color: #006CFC;
          border-radius: 8px;
          border: solid 10px blue;
          width: 322px;
          height: 87px;
        }
      `;
      shadow.appendChild(btn);
      shadow.appendChild(style);
    }
  }
);
