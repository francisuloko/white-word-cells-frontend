/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import whiteWordCellsAPI from '../common/whiteWordCellsAPI';

export const getCells = createAsyncThunk('cells/all', async (thunkAPI) => {
  try {
    const response = await whiteWordCellsAPI.get('api/v1/cells');
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const createCell = createAsyncThunk('cells/create', async (cell, thunkAPI) => {
  try {
    const response = await whiteWordCellsAPI.post('api/v1/cells', cell);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const editCell = createAsyncThunk('cell/edit', async (cell, thunkAPI) => {
  try {
    const response = await whiteWordCellsAPI.put(`api/v1/cells/${cell.id}`, cell);
    thunkAPI.dispatch(getCells());
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const deleteCell = createAsyncThunk('api/v1/cell/delete', async (cell, thunkAPI) => {
  try {
    const response = await whiteWordCellsAPI.delete(`api/v1/cells/${cell.id}`);
    thunkAPI.dispatch(getCells());
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
};

const cellSlice = createSlice({
  name: 'cells',
  initialState,
  extraReducers: {
    [getCells.fulfilled]: (state, action) => {
      state.cells = action.payload;
    },
  },
});

const { reducer } = cellSlice;
export default reducer;
