/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QuizQuestion } from 'common/types';
import { getQuestions } from 'api/getQuestions';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchStatus',
  async () => {
    const res = await getQuestions();

    return res.data;
  },
);

interface QuestionsState {
  entities: QuizQuestion[];
  loading: boolean;
}

const initialState: QuestionsState = {
  entities: [] as QuizQuestion[],
  loading: true,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
  },
});

export default questionsSlice.reducer;
