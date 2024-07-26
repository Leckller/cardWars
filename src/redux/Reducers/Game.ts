import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType, ProfileType } from '../../types';
import Game from '../../GameClasses/Game';
import Battle from '../../GameClasses/Battle';

interface GameState {
  game: GameType.default;
}

const initialState: GameState = {
  game: new Game(new Battle()),
};

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    setPlayers(state, action: PayloadAction<[ProfileType.default, ProfileType.default]>) {
      state.game.players = action.payload;
    },
    startGame(state) {
      state.game.startGame();
    },
    useCard(state, action: PayloadAction<{ cardIndex: number, floorIndex: number }>) {
      const { cardIndex, floorIndex } = action.payload;
      state.game.players[state.game.actualTurn()].useCard(cardIndex, floorIndex);
    }
  },
});

export const { setPlayers, startGame, useCard } = GameSlice.actions;
export default GameSlice.reducer;
