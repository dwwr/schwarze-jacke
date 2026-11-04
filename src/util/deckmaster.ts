import { createDeck, getShuffledDeck } from "./deck";
import type { Card, Deck } from "../types";

export class Deckmaster {
  deck: Deck;
  discardPile: Deck;

  constructor() {
    this.deck = createDeck();
    this.discardPile = [];
  }

  deal(): Card {
    return this.deck.shift() as Card;
  }

  discard(cards: Card[]) {
    cards.forEach((c) => {
      this.discardPile.push(c);
    });
  }

  reset() {
    this.deck = createDeck();
    this.discardPile = [];
  }

  reshuffle() {
    this.deck = getShuffledDeck([...this.deck, ...this.discardPile]);
    this.discardPile = [];
  }
}
