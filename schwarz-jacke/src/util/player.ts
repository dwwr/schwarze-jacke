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

  sumHand() {
    return this.hand.reduce((a, c) => a + c.value, 0);
  }
}
