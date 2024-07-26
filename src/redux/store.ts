import { configureStore } from '@reduxjs/toolkit';
import GameReducer from './Reducers/Game';

export const store = configureStore({
  reducer: {
    Game: GameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
