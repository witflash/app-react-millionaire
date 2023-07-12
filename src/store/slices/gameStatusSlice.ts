/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameStatus } from '../types';

interface GameStatusState {
  value: GameStatus;
}

const initialState: GameStatusState = {
  value: GameStatus.upcoming,
};

export const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    changeGameState: (state, action: PayloadAction<GameStatus>) => {
      state.value = action.payload;
    },
  },
});

export const { changeGameState } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;