export type Suit = "hearts" | "diamonds" | "spades" | "clubs";
export type Face = "jack" | "queen" | "king" | "ace";

export interface Card {
  suit: Suit;
  value: number;
  face?: Face;
  isAce?: boolean;
}

export type Deck = Array<Card>;

export interface Hand {
  cards: Array<Card>;
  value: number;
}
