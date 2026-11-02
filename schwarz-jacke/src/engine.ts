import { Deckmaster } from "./util/deckmaster";
import { Player } from "./util/player";
import type { Card, Deck, GameOutcome, HandEvaluation } from "./types";

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
    player.handEvaluation = "blackjack";
    return "blackjack";
  }
  if (player.value > 21) {
    player.handEvaluation = "invalid";
    return "invalid";
  }
  player.handEvaluation = "valid";
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

export const evaluateOutcome = (
  player: Player,
  dealer: Player,
): GameOutcome => {
  if (player.handEvaluation === "invalid") {
    return "Dealer Winner";
  }

  if (dealer.handEvaluation === "invalid") {
    return "Player Winner";
  }

  if (player.value > dealer.value) {
    return "Player Winner";
  }
  if (dealer.value > player.value) {
    return "Dealer Winner";
  }
  return "Tie";
};

export const resetBoard = (
  deckmaster: Deckmaster,
  player: Player,
  dealer: Player,
  setPlayerHand: React.Dispatch<React.SetStateAction<Card[]>>,
  setDealerHand: React.Dispatch<React.SetStateAction<Card[]>>,
) => {
  const toDiscard = [...player.hand, ...dealer.hand];
  player.reset();
  dealer.reset();
  deckmaster.discard(toDiscard);
  setPlayerHand([]);
  setDealerHand([]);
};
