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

export const createCell = createAsyncThunk('cells/create', async (cell, thunkAPI) => {
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

// export const editCell = createAsyncThunk('cells/create', async (id, thunkAPI) => {
//   try {
//     const response = await UserService.editCell(id);
//     return response.data;
//   } catch (error) {
//     const message = (error.response && error.response.data && error.response.data.message)
//       || error.message
//       || error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

// export const deleteCell = createAsyncThunk('cells/create', async (cell, thunkAPI) => {
//   try {
//     const response = await UserService.editCell(cell);
//     return response.data;
//   } catch (error) {
//     const message = (error.response && error.response.data && error.response.data.message)
//       || error.message
//       || error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

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
    [createCell.fulfilled]: (state, action) => {
      state.cells = [...state, action.payload];
    },
    // [editCell.fulfilled]: (state, action) => {
    //   const updatedCells = state.filter((cell) => cell.id !== action.payload.id);
    //   state.cells = updatedCells;
    // },
    // [deleteCell.fulfilled]: (state, action) => {
    //   const updatedCells = state.filter((cell) => cell.id !== action.payload);
    //   state.cells = updatedCells;
    // },
  },
});

const { reducer } = cellSlice;
export default reducer;
