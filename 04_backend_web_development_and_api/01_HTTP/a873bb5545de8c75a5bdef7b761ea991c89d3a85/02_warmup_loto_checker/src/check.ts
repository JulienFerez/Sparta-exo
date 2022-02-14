import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const winTicket = lottery_draw();
  let winNumber = 0;
  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i] === winTicket[i]) {
      winNumber++;
    }
  }

  if (winNumber === 3) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}
