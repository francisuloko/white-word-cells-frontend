/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import UserService from '../services/user.service';

export const getCells = createAsyncThunk('cells/all', async (thunkAPI) => {
  try {
    const response = await UserService.getCells();
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const createCell = createAsyncThunk('cells/create', async ({ cell }, thunkAPI) => {
  try {
    const response = await UserService.createCell(cell);
    return response.data;
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
  cell: {},
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
    // [createCell.fulfilled]: (state, action) => {
    //   state.cell = action.payload;
    // },
    // [createCell.rejected]: (state) => {
    //   state.cell = {};
    // },
  },
});

const { reducer } = cellSlice;
export default reducer;
