import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType, ProfileType } from '../../types';
import Game from '../../GameClasses/Game';
import Battle from '../../GameClasses/Battle';
import Card from '../../types/Card';
import Finn from '../../GameClasses/Profiles/Finn';

interface GameState {
  game: GameType.default;
  cards: Card[];
  profile: ProfileType.default;
}

const initialState: GameState = {
  game: new Game(new Battle()),
  cards: [],
  profile: new Finn()
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
    },
    setProfile(state, action: PayloadAction<ProfileType.default>) {
      state.profile = action.payload
    }
  },
});

export const { setPlayers, startGame, useCard, setProfile, } = GameSlice.actions;
export default GameSlice.reducer;
