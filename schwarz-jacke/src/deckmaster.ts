import { createDeck } from "./deck";
import type { Card, Deck } from "./types";

export class Deckmaster {
  deck: Deck;
  discardPile: Deck;

  constructor() {
    this.deck = createDeck();
    this.discardPile = [];
  }

  deal() {
    return this.deck.pop();
  }

  clear(cards: Card[]) {
    cards.forEach((c) => {
      this.discardPile.push(c);
    });
  }
}
