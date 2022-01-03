/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import UserService from '../services/user.service';

export const getCells = createAsyncThunk('api/cells', async (thunkAPI) => {
  try {
    const res = await UserService.getCells();
    return res.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  cells: [],
};

const cellSlice = createSlice({
  name: 'cells',
  initialState,
  extraReducers: {
    [getCells.fulfilled]: (state, action) => {
      state.cells = action.payload;
    },
    [getCells.rejected]: (state) => {
      state.cells = [];
    },
  },
});

const { reducer } = cellSlice;
export default reducer;
