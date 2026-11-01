import { Deckmaster } from "./util/deckmaster";
import { Player } from "./util/player";
import type { Card, Deck, HandEvaluation } from "./types";

export const setup = (
  deckmaster: Deckmaster,
  player: Player,
  dealer: Player,
  setDeck: React.Dispatch<React.SetStateAction<Deck>>,
  setPlayerHand: React.Dispatch<React.SetStateAction<Card[]>>,
  setDealerHand: React.Dispatch<React.SetStateAction<Card[]>>,
): void => {
  if (deckmaster.deck.length < 4) {
    deckmaster.reset();
    return setup(
      deckmaster,
      player,
      dealer,
      setDeck,
      setPlayerHand,
      setDealerHand,
    );
  }

  dealer.getCard(deckmaster.deal());
  dealer.getCard(deckmaster.deal());
  player.getCard(deckmaster.deal());
  player.getCard(deckmaster.deal());

  setDeck([...deckmaster.deck]);
  setPlayerHand([...player.hand]);
  setDealerHand([...dealer.hand]);
};

export const hit = (
  deckmaster: Deckmaster,
  player: Player,
  setDeck: React.Dispatch<React.SetStateAction<Deck>>,
  setPlayerHand: React.Dispatch<React.SetStateAction<Card[]>>,
) => {
  player.getCard(deckmaster.deal());
  setDeck([...deckmaster.deck]);
  setPlayerHand([...player.hand]);
};

export const evaluateHand = (player: Player): HandEvaluation => {
  if (player.value === 21) {
    return "blackjack";
  }
  if (player.value > 21) {
    return "invalid";
  }
  return "valid";
};

export const cpuPlayer = (
  deckmaster: Deckmaster,
  player: Player,
  setDeck: React.Dispatch<React.SetStateAction<Deck>>,
  setPlayerHand: React.Dispatch<React.SetStateAction<Card[]>>,
) => {
  while (player.value < 17) {
    hit(deckmaster, player, setDeck, setPlayerHand);
  }
};
