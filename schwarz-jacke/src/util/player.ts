import type { Card } from "../types";

export class Player {
  hand: Card[];
  value: number;
  hasAce?: boolean;

  constructor() {
    this.hand = [];
    this.value = 0;
    this.hasAce = false;
  }

  getCard(card: Card) {
    this.hand.push(card);
    this.value = this.sumHand();
  }

  sumHand(): number {
    let sum = this.hand.reduce((a, c) => a + c.value, 0);
    let aceCount = this.hand.filter((card) => card.isAce).length;

    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount--;
    }

    return sum;
  }
}
