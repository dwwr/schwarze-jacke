# Schwarze-Jacke

<img width="1512" height="840" alt="Screenshot 2026-11-03 at 7 31 08 PM" src="https://github.com/user-attachments/assets/746aa89c-da74-42c9-aad1-a4e39b5b4614" />


This is the game of blackjack. Next JS react app, allows user to start game and progress to end state, then reset and play again. It uses a 52 card deck that reshuffles once there aren't enough cards to deal a full hand to each player.

To play:

- `npm i && npm dev`
- navigate to `http://localhost:5173/`

### Task Breakdown

- stand up repo
  - create vite app (ts - react) ✅
  - write game plan ✅
- RnD Game Engine
  - write types ✅
  - "Deckmaster" Class (handles deck operations) ✅
  - "Player" Class (handles hand operations) ✅
  - Engine - pure functions that operate on Deckmaster & Player instances ✅
- Implement Game Logic
  - steps:
    - Deal ✅
    - Player turn - may bust (early resolve) ✅
    - Dealer turn - may bust (early resolve) ✅
    - Resolve ✅
- UI
  - render the numbers and buttons to actuate the game via ui ✅
  - stub componentry ✅
- Stretch Goals / Next Ups
  - break out UI components and style them better:
    - Table/Board
    - Card (face up/down), Deck, Hand
  - animate UI - anime.js
  - double down (double bet, get one more card, must stand)
  - splitting (1 hand -> 2 hands)
  - betting (new step, before Deal)
  - backend (move logic to backend to prevent cheating)
  - multiplayer (socket io?)

### Resources Used

- https://bicyclecards.com/how-to-play/blackjack/
- https://intranet.missouriwestern.edu/cas/wp-content/uploads/sites/17/2020/05/Standard-Deck-of-Cards.pdf
- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
