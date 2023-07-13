/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizStage } from 'common/types';
import { GameStatus } from '../types';

interface GameProcessState {
  status: GameStatus;
  userEarned: QuizStage | null;
}

const initialState: GameProcessState = {
  status: GameStatus.upcoming,
  userEarned: 'level11',
};

export const gameProcessSlice = createSlice({
  name: 'gameProcess',
  initialState,
  reducers: {
    changeGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    setUserEarning: (state, action: PayloadAction<QuizStage | null>) => {
      state.userEarned = action.payload;
    },
  },
});

export const { changeGameStatus, setUserEarning } = gameProcessSlice.actions;
export default gameProcessSlice.reducer;
