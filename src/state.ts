export type Move = "piedra" | "papel" | "tijera" | "";
type Result = "player" | "tie" | "computer";

export const state = {
  data: {
    currentGame: {
      computerMove: "",
      playerMove: "",
    },
    history: {
      playerWins: 0,
      computerWins: 0,
      ties: 0,
    },
  },
  listeners: [],
  init() {
    const currentLocalState = localStorage.getItem("score");
    if (currentLocalState) {
      this.setState(JSON.parse(currentLocalState));
    }
  },
  subscribe(cb: () => {}) {
    this.listeners.push(cb);
  },
  setPlayerMove(move: Move) {
    const currentState = this.getState();
    currentState.currentGame.playerMove = move;
    this.setState(currentState);
  },
  setComputerMove(move: number) {
    const currentState = this.getState();
    let newMove: Move;
    if (move == 1) {
      newMove = "piedra";
    }
    if (move == 2) {
      newMove = "papel";
    }
    if (move == 3) {
      newMove = "tijera";
    }
    currentState.currentGame.computerMove = newMove;
    this.setState(currentState);
  },
  whoWins(playerMove: Move, computerMove: Move): Result {
    let result: Result = "computer";
    if (playerMove == "piedra" && computerMove == "tijera") {
      result = "player";
    }
    if (playerMove == "papel" && computerMove == "piedra") {
      result = "player";
    }
    if (playerMove == "tijera" && computerMove == "papel") {
      result = "player";
    }
    if (playerMove == computerMove) {
      result = "tie";
    }
    return result;
  },
  changeHistory(result: Result) {
    const currentState = this.getState();
    if (result == "computer") {
      currentState.history.computerWins++;
      this.setState(currentState);
    }
    if (result == "player") {
      currentState.history.playerWins++;
      this.setState(currentState);
    }
    if (result == "tie") {
      currentState.history.ties++;
      this.setState(currentState);
    }
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("score", JSON.stringify(this.getState()));
  },
};
