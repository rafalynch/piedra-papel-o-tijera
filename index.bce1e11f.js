var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire6f0b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){let o=n[e];delete n[e];let r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire6f0b=o);var r;o.register("vNK0r",(function(e,t){var n,o,r,a,c;n=e.exports,o="getBundleURL",r=()=>c,a=e=>c=e,Object.defineProperty(n,o,{get:r,set:a,enumerable:!0,configurable:!0});var i=null;function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}c=function(){return i||(i=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[0])}return"/"}()),i}})),r=o("vNK0r").getBundleURL()+"fondo.07f8736e.png";const a={data:{currentGame:{computerMove:"",playerMove:""},history:{playerWins:0,computerWins:0,ties:0}},listeners:[],init(){const e=localStorage.getItem("score");e&&this.setState(JSON.parse(e))},subscribe(e){this.listeners.push(e)},setPlayerMove(e){const t=this.getState();t.currentGame.playerMove=e,this.setState(t)},setComputerMove(e){const t=this.getState();let n;1==e&&(n="piedra"),2==e&&(n="papel"),3==e&&(n="tijera"),t.currentGame.computerMove=n,this.setState(t)},whoWins(e,t){let n="computer";return"piedra"==e&&"tijera"==t&&(n="player"),"papel"==e&&"piedra"==t&&(n="player"),"tijera"==e&&"papel"==t&&(n="player"),e==t&&(n="tie"),n},changeHistory(e){const t=this.getState();"computer"==e&&(t.history.computerWins++,this.setState(t)),"player"==e&&(t.history.playerWins++,this.setState(t)),"tie"==e&&(t.history.ties++,this.setState(t))},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("score",JSON.stringify(this.getState()))}};const c=[{path:/\/home/,component:function(e){const t=document.createElement("div");t.className="home-container";const n=document.createElement("div");n.className="title-container",n.innerHTML='\n  <h1 class="title">Piedra, <br/> Papel<span class="title-o"> ó </span> <br/> Tijera</h1>\n  ',t.appendChild(n);const o=document.createElement("custom-button");o.className="start-button",o.innerHTML="Empezar",o.addEventListener("click",(t=>{e.goTo("/comenzar")})),t.appendChild(o);const a=document.createElement("div");a.className="iconos-container";const c=document.createElement("papel-comp");c.className="icono-papel",a.appendChild(c);const i=document.createElement("piedra-comp");i.className="icono-piedra",a.appendChild(i);const s=document.createElement("tijera-comp");a.appendChild(s),s.className="icono-tijera",t.appendChild(a);const l=document.createElement("style");return l.innerHTML=`\n    body {\n      background: url("${r}") repeat;\n    }\n    .home-container {\n      display: grid;\n      justify-content: center;\n    }\n    .start-button {\n      margin: 25px auto 25px; \n    }\n    .title-container {\n      margin-top: 100px;\n      font-family: "American Typewriter";\n    }\n    .title {\n      color: #009048;\n      font-size: 80px;\n      margin: 0;\n      font-family: "American Typewriter";\n    }\n    .title-o  {\n      color: #91CCAF;\n      font-size: 80px;\n      margin: 0;\n    }\n    .iconos-container{\n      display: flex;\n      justify-content: center;\n      gap: 35px;\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n    }\n    .icono-papel, .icono-tijera, .icono-piedra {\n      transform: translateY(25%);\n    }\n  `,t.appendChild(l),t}},{path:/\/comenzar/,component:function(e){const t=document.createElement("div");t.className="comenzar-container";const n=document.createElement("div");n.className="descripcion-container",n.innerHTML='\n  <h3 class="instructions">Presioná jugar <br/>\n  y elegí: piedra, <br/> papel o tijera <br/> antes de que <br/> pasen los 3 <br/> segundos.</h3>\n  ',t.appendChild(n);const o=document.createElement("custom-button");o.className="jugar-button",o.innerHTML="¡Jugar!",o.addEventListener("click",(t=>{a.setPlayerMove(""),e.goTo("/juego")})),t.appendChild(o);const c=document.createElement("div");c.className="iconos-container";const i=document.createElement("papel-comp");i.className="icono-papel",c.appendChild(i);const s=document.createElement("piedra-comp");s.className="icono-piedra",c.appendChild(s);const l=document.createElement("tijera-comp");c.appendChild(l),l.className="icono-tijera",t.appendChild(c);const p=document.createElement("style");return p.innerHTML=`\n    body {\n      background: url("${r}") repeat;\n    }\n    .comenzar-container {\n      display: grid;\n      justify-content: center;\n    }\n    .jugar-button {\n      margin: 25px auto 25px; \n    }\n    .descripcion-container {\n      margin-top: 100px;\n      font-family: "American Typewriter";\n    }\n    .instructions {\n      color: black;\n      font-size: 40px;\n      margin: 0;\n      font-family: "American Typewriter"; \n      text-align: center;\n    }\n    .iconos-container{\n      display: flex;\n      justify-content: center;\n      gap: 35px;\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n    }\n    .icono-papel, .icono-tijera, .icono-piedra {\n      transform: translateY(25%);\n    }\n  `,t.appendChild(p),t}},{path:/\/juego/,component:function(e){const t=document.createElement("div");t.className="juego-container";const n=document.createElement("p");n.innerHTML="Go!",n.className="timer-container",t.appendChild(n);let o=3;const c=setInterval((()=>{document.querySelector(".timer-container").innerHTML=o.toString(),o--,o<0&&(clearInterval(c),function(){if(a.getState().currentGame.playerMove){const t=Math.floor(3*Math.random()+1);a.setComputerMove(t),e.goTo("/show");const n=a.getState().currentGame.playerMove,o=a.getState().currentGame.computerMove,r=a.whoWins(n,o);a.changeHistory(r)}else e.goTo("/comenzar")}())}),1e3),i=document.createElement("div");i.className="iconos-container";const s=document.createElement("papel-comp");s.className="icono-papel",i.appendChild(s),s.addEventListener("click",(e=>{const t=e.target;document.querySelector(".icono-piedra").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),document.querySelector(".icono-tijera").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),t.parentElement.setAttribute("style","transform: translateY(15%)"),t.setAttribute("style","transform: translateY(0%)"),a.setPlayerMove("papel")}));const l=document.createElement("piedra-comp");l.className="icono-piedra",i.appendChild(l),l.addEventListener("click",(e=>{const t=e.target;document.querySelector(".icono-papel").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),document.querySelector(".icono-tijera").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),t.parentElement.setAttribute("style","transform: translateY(15%)"),t.setAttribute("style","transform: translateY(0%)"),a.setPlayerMove("piedra")}));const p=document.createElement("tijera-comp");i.appendChild(p),p.className="icono-tijera",p.addEventListener("click",(e=>{const t=e.target;document.querySelector(".icono-papel").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),document.querySelector(".icono-piedra").setAttribute("style","transform: translateY(25%); opacity: 0.5;"),t.parentElement.setAttribute("style","transform: translateY(15%)"),t.setAttribute("style","transform: translateY(0%)"),a.setPlayerMove("tijera")})),t.appendChild(i);const d=document.createElement("style");return d.innerHTML=`\n    body {\n      background: url("${r}") repeat;\n    }\n    .juego-container {\n      display: grid;\n      justify-content: center;\n    }\n    .timer-container {\n      margin-top: 200px;\n      font-family: "American Typewriter";\n      font-size: 200px;\n    }\n    .iconos-container{\n      display: flex;\n      justify-content: center;\n      gap: 35px;\n      position: fixed;\n      bottom: 0;\n      width: 100%;\n    }\n    .icono-papel, .icono-tijera, .icono-piedra {\n      transform: translateY(25%);\n    }\n  `,t.appendChild(d),t}},{path:/\/show/,component:function(e){const t=document.createElement("div");t.className="show-container";const n=[{nombre:"piedra",componente:"piedra-comp"},{nombre:"papel",componente:"papel-comp"},{nombre:"tijera",componente:"tijera-comp"}],o=a.getState().currentGame.playerMove,c=a.getState().currentGame.computerMove,i=a.whoWins(o,c),s=document.createElement("div");s.className="icono-computer";for(const e of n)c==e.nombre&&(s.innerHTML=`\n        <${e.componente}></${e.componente}>\n      `);const l=document.createElement("div");l.className="icono-player";for(const e of n)o==e.nombre&&(l.innerHTML=`\n        <${e.componente}></${e.componente}>\n      `);t.appendChild(s),t.appendChild(l);const p=document.createElement("style");return p.innerHTML=`\n    body {\n      background: url("${r}") repeat;\n    }\n    .show-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .icono-computer {\n      transform: rotate(180deg) scale(2.5);\n      position: fixed;\n      top: 0;\n      margin: auto;\n    }\n    .icono-player {\n      transform: scale(2.5);\n      position: fixed;\n      bottom: 0;\n      margin: auto;\n    }\n  `,t.appendChild(p),setTimeout((()=>{const n=document.createElement("div");n.style.display="grid",n.style.justifyItems="center",n.style.gap="20px",n.innerHTML=`\n      <result-comp label="${i}"></result-comp>\n    `;const o=document.createElement("score-comp");n.style.position="absolute",n.style.top="60px",n.appendChild(o);const r=document.createElement("custom-button");r.className="volver-button",r.innerHTML="Volver a jugar",r.addEventListener("click",(t=>{e.goTo("/comenzar")})),n.appendChild(r),t.appendChild(n)}),2500),t}}];customElements.define("custom-button",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");e.innerHTML=`\n        <button class="btn">${this.innerHTML}</button>\n      `;const n=document.createElement("style");n.innerHTML="\n        .btn {\n          font-family: 'Odibee Sans', cursive;\n          color: white;\n          font-size: 45px;\n          background-color: #006CFC;\n          border-radius: 8px;\n          border: solid 10px blue;\n          width: 322px;\n          height: 87px;\n        }\n      ",e.appendChild(t),e.appendChild(n)}}),o.register("4KDmT",(function(e,t){e.exports=o("vNK0r").getBundleURL()+"papel.411bce94.svg"})),customElements.define("papel-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("img");t.setAttribute("src",o("4KDmT")),e.appendChild(t)}}),o.register("14wP2",(function(e,t){e.exports=o("vNK0r").getBundleURL()+"piedra.578f3049.svg"})),customElements.define("piedra-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("img");t.setAttribute("src",o("14wP2")),e.appendChild(t)}}),o.register("7r0WZ",(function(e,t){e.exports=o("vNK0r").getBundleURL()+"tijera.0403a6bb.svg"})),customElements.define("tijera-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("img");t.setAttribute("src",o("7r0WZ")),e.appendChild(t)}}),customElements.define("custom-timer",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="timer",t.innerHTML=`\n        ${this.innerHTML}\n      `;const n=document.createElement("style");n.innerHTML="\n        .timer {\n          font-family: 'Odibee Sans', cursive;\n          color: black;\n          font-size: 45px;\n        }\n      ",e.appendChild(t),e.appendChild(n)}}),customElements.define("score-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="score-container";const n=document.createElement("style");t.innerHTML=`\n        <h3 class="score-title">Score</h3>\n        <div class="score-body">\n        <p>Vos: ${a.getState().history.playerWins}</p>\n        <p>Maquina: ${a.getState().history.computerWins}</p>\n        <p>Empates: ${a.getState().history.ties}</p>\n        </div>\n      `,n.innerHTML='\n        .score-container {\n          width: 259px;\n          height: 225px;\n          padding: 10px;\n          border: 10px solid;\n          border-radius: 10px;\n          background: white;\n          font-family: "Odibee Sans";\n        }\n        .score-title {\n          text-align: center;\n          margin: 0;\n          font-size: 55px;\n        }\n        .score-body p{\n          text-align: right;\n          margin: 0;\n          font-size: 45px;\n        }\n      ',e.appendChild(t),e.appendChild(n)}}),customElements.define("result-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style");t.className="result-title","player"==this.getAttribute("label")&&(t.innerHTML="\n          <h2>Ganaste!</h2>\n        ",t.style.backgroundColor="green"),"tie"==this.getAttribute("label")&&(t.innerHTML="\n          <h2>Empate!</h2>\n        ",t.style.backgroundColor="lightblue"),"computer"==this.getAttribute("label")&&(t.innerHTML="\n        <h2>Perdiste!</h2>\n        ",t.style.backgroundColor="red"),n.innerHTML='\n        .result-title h2{\n          margin: 0;\n          color: white;\n          text-align: center;\n          font-family: "Odibee Sans";\n          font-size: 55px;\n          border: solid black;\n          padding: 10px;\n        }\n      ',e.appendChild(n),e.appendChild(t)}}),console.log(location.pathname),a.init(),function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const o of c)if(o.path.test(n)){const n=o.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}console.log("Vengo del router"),location.pathname.replace("piedra-papel-o-tijera",""),console.log(location.pathname),history.pushState({},"","/home"),"/"==location.pathname&&t("/home"),"/piedra-papel-o-tijera"==location.pathname?t("/home"):n(location.pathname)}(document.querySelector(".root"));
//# sourceMappingURL=index.bce1e11f.js.map
