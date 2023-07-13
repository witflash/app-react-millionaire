import { configureStore } from '@reduxjs/toolkit';
import gameProcessSlice from 'store/slices/gameProcessSlice';
import questionsReducer from './slices/questionsSlice';

export const reduxStore = configureStore({
  reducer: {
    gameProcess: gameProcessSlice,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
