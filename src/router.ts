import { initHome } from "./pages/home";
import { initComenzar } from "./pages/comenzar";
import { initJuego } from "./pages/juego";
import { initShowMoves } from "./pages/show-moves";

const routes = [
  {
    path: /\/home/,
    component: initHome,
  },
  {
    path: /\/comenzar/,
    component: initComenzar,
  },
  {
    path: /\/juego/,
    component: initJuego,
  },
  {
    path: /\/show/,
    component: initShowMoves,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
}
