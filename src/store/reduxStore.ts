import { configureStore } from '@reduxjs/toolkit';
import gameStatusReducer from './slices/gameStatusSlice';
import questionsReducer from './slices/questionsSlice';

export const reduxStore = configureStore({
  reducer: {
    gameStatus: gameStatusReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
