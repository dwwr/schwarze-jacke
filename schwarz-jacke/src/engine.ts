import { Deckmaster } from "./util/deckmaster";
import { Player } from "./util/player";
import type { Card, Deck } from "./types";

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
