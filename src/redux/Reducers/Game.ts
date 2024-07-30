import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FloorType, GameType, ProfileType } from '../../types';
import Game from '../../GameClasses/Game';
import Battle from '../../GameClasses/Battle';
import Finn from '../../GameClasses/Profiles/Finn';
import Jake from '../../GameClasses/Profiles/Jake';

interface GameState {
  game: GameType.default;
  player: ProfileType.default;
  enemy: ProfileType.default;
  enemyFloors: FloorType.default[],
  playerFloors: FloorType.default[],
}

const initialState: GameState = {
  game: new Game(new Battle()),
  player: new Finn(),
  enemy: new Jake(),
  enemyFloors: [],
  playerFloors: [],
};

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    startGame(state) {
      const randomPlayer = Math.round(Math.random());
      const p1 = randomPlayer === 1 ? state.enemy : state.player;
      const p2 = randomPlayer === 0 ? state.enemy : state.player;
      state.enemyFloors = state.enemy.cards.floors;
      state.playerFloors = state.player.cards.floors;
      state.game.startGame(p1, p2);
    },
    playRound(state) {
      state.game.playRound(state.game.turn ? state.enemy : state.player, !state.game.turn ? state.enemy : state.player);
    },
    useCard(state, action: PayloadAction<{ cardId: number, floorIndex: number }>) {
      const { cardId, floorIndex } = action.payload;
      state.game.turn ?
        state.enemy.useCard(cardId, floorIndex) :
        state.player.useCard(cardId, floorIndex)

      state.enemyFloors = state.enemy.cards.floors;
      state.playerFloors = state.player.cards.floors;
    },
    setPlayer(state, action: PayloadAction<ProfileType.default>) {
      state.player = action.payload
    },
    setEnemy(state, action: PayloadAction<ProfileType.default>) {
      state.enemy = action.payload
    }
  },
});

export const { startGame, useCard, playRound, setEnemy, setPlayer, } = GameSlice.actions;
export default GameSlice.reducer;
