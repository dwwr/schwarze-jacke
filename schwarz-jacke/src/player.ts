import type { Card } from "./types";

export class Player {
  hand: Card[];
  value: number;
  hasAce?: boolean;

  constructor() {
    this.hand = [];
    this.value = 0;
    this.hasAce = false;
  }
}
