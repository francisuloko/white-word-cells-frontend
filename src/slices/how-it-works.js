/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import instructions from '../services/how-it-works';

export const getInstructions = createAsyncThunk('instructions/all', async (thunkAPI) => {
  try {
    const response = await instructions;
    return response;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  instructions: [],
};

const instructionsSlice = createSlice({
  name: 'cells',
  initialState,
  extraReducers: {
    [getInstructions.fulfilled]: (state, action) => {
      state.instructions = action.payload;
    },
  },
});

const { reducer } = instructionsSlice;
export default reducer;
