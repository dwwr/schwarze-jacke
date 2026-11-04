import React from "react";
import "./App.css";
import { Deckmaster } from "./util/deckmaster";
import { Player } from "./util/player";
import type { Card, Deck } from "./types";
import {
  cpuPlayer,
  evaluateHand,
  evaluateOutcome,
  hit,
  resetBoard,
  setup,
} from "./engine";

const deckmaster = new Deckmaster();
const player = new Player();
const dealer = new Player();

function App() {
  const [deck, setDeck] = React.useState<Deck>([...deckmaster.deck]);
  const [playerHand, setPlayerHand] = React.useState<Card[]>([...player.hand]);
  const [dealerHand, setDealerHand] = React.useState<Card[]>([...player.hand]);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const [isDealerTurn, setIsDealerTurn] = React.useState<boolean>(false);

  const playerStatus = evaluateHand(player);

  React.useEffect(() => {
    if (
      !gameOver &&
      (playerStatus === "invalid" || playerStatus === "blackjack")
    ) {
      if (playerStatus === "invalid") {
        setGameOver(true);
      } else {
        setIsDealerTurn(true);
        cpuPlayer(deckmaster, dealer, setDeck, setDealerHand);
        setGameOver(true);
      }
    }
  }, [playerHand, playerStatus, gameOver]);

  const outcome = gameOver ? evaluateOutcome(player, dealer) : undefined;

  return (
    <>
      {gameOver && outcome && (
        <div>
          <h2>{outcome}</h2>
          <div>
            You {player.value} · Dealer {dealer.value}
          </div>
          <input
            type="button"
            className="button"
            value="DEAL AGAIN"
            onClick={() => {
              resetBoard(
                deckmaster,
                player,
                dealer,
                setPlayerHand,
                setDealerHand,
              );
              setIsDealerTurn(false);
              setGameOver(false);
            }}
          />
        </div>
      )}

      {!gameOver && (
        <div>
          <div>
            <input
              type="button"
              className="button"
              value="DEAL"
              onClick={() => {
                setIsDealerTurn(false);
                setGameOver(false);
                setup(
                  deckmaster,
                  player,
                  dealer,
                  setDeck,
                  setPlayerHand,
                  setDealerHand,
                );
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              DECK {deck.length}
              {deck.length && (
                <div className="deck">
                  <div className="deck deckBase" />
                  <div className="deck deckOverlap" />
                  <div className="deck deckOverlap" />
                </div>
              )}
            </div>
            <div>
              PLAYER HAND
              {playerHand.map((card, index) => (
                <div className="card cardFront" key={index}>
                  <span>{card.face || card.value}</span>
                  <span>{card.suit}</span>
                </div>
              ))}
              <input
                type="button"
                className="button"
                value="HIT"
                onClick={() => {
                  hit(deckmaster, player, setDeck, setPlayerHand);
                }}
              />
              <input
                type="button"
                className="button"
                value="STAY"
                onClick={() => {
                  setIsDealerTurn(true);
                  cpuPlayer(deckmaster, dealer, setDeck, setDealerHand);
                  setGameOver(true);
                }}
              />
            </div>
            <div>
              DEALER HAND
              {dealerHand.map((card, index) => {
                const hidden = !isDealerTurn && index > 0;
                return (
                  <div
                    className={hidden ? "card cardBack" : "card cardFront"}
                    key={index}
                  >
                    {!hidden && (
                      <>
                        <span>{card.face || card.value}</span>
                        <span>{card.suit}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
