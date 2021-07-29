import { initRouter } from "./router";
import { state } from "./state";
import "./components/button";
import "./components/papel";
import "./components/piedra";
import "./components/tijera";
import "./components/timer";
import "./components/score";
import "./components/result";

function main() {
  console.log(location.pathname);
  state.init();
  initRouter(document.querySelector(".root"));
}

main();
