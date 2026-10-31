import type { Card, Deck, Face, Suit } from "./types";

const suits: Suit[] = ["hearts", "diamonds", "spades", "clubs"];
const faces: Face[] = ["ace", "jack", "king", "queen"];
const numbers: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export const createSuitCards = (suit: Suit): Card[] => {
  const base = [...numbers, ...faces];
  const cards: Card[] = base.map((b) => {
    if (typeof b === "number") {
      return {
        suit,
        value: b,
      };
    }
    if (b.includes("ace")) {
      return {
        suit,
        face: b,
        value: 1,
        isAce: true,
      };
    }
    return {
      suit,
      face: b,
      value: 10,
    };
  });

  return cards;
};

export const createDeck = (): Deck => {
  const cards: Deck = suits
    .map((s) => {
      return createSuitCards(s);
    })
    .flat();

  const getShuffledDeck = (arr: Deck) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  const shuffled: Deck = getShuffledDeck(cards);
  return shuffled;
};
