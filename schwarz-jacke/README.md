# Schwarze-Jacke

### Task Breakdown

- stand up repo
  - create vite app (ts - react) ✅
  - write game plan ✅
- RnD Game Engine
  - write types
  - "Deckmaster" Class (handles deck operations)
  - "Player" Class (handles hand operations)
  -
- Implement Game Logic
  - steps:
    - Deal,
    - Player turn - may bust (early resolve)
    - Dealer turn - may bust (early resolve)
    - Resolve
- UI
  - render the numbers and buttons to actuate the game via ui
  - build UI components:
    - Table/Board
    - Card (face up/down), Deck, Hand
- Stretch Goals / Next Ups
  - animate UI - anime.js
  - double down (double bet, get one more card, must stand)
  - splitting (1 hand -> 2 hands)
  - betting (new step, before Deal)
  - backend (move logic to backend to prevent cheating)
  - multiplayer (socket io?)

### Resources Used

- https://bicyclecards.com/how-to-play/blackjack/
- https://intranet.missouriwestern.edu/cas/wp-content/uploads/sites/17/2020/05/Standard-Deck-of-Cards.pdf
