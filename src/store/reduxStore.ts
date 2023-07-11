import { configureStore } from '@reduxjs/toolkit';
import gameStatusReducer from './slices/gameStatusSlice';

export const reduxStore = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
