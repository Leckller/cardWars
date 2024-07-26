import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType, ProfileType } from '../../types';
import Game from '../../GameClasses/Game';
import Battle from '../../GameClasses/Battle';
import Card from '../../types/Card';

interface GameState {
  game: GameType.default;
  cards: Card[]
}

const initialState: GameState = {
  game: new Game(new Battle()),
  cards: []
};

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    setPlayers(state, action: PayloadAction<[ProfileType.default, ProfileType.default]>) {
      state.game.players = action.payload;
      state.cards = action.payload[0].cards.hand
    },
    startGame(state) {
      state.game.startGame();
    },
    useCard(state, action: PayloadAction<{ cardId: number, floorIndex: number }>) {
      const { cardId, floorIndex } = action.payload;
      state.game.players[0].useCard(cardId, floorIndex);
      state.cards = state.game.players[0].cards.hand;
    }
  },
});

export const { setPlayers, startGame, useCard } = GameSlice.actions;
export default GameSlice.reducer;
