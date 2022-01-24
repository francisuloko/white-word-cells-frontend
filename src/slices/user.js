/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import whiteWordCellsAPI from '../common/whiteWordCellsAPI';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.get('fetch');
      return response.data;
    } catch (error) {
      const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/update',
  async (params, thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.put('update', { user: params });
      return response.data;
    } catch (error) {
      const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (params, thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.post('delete', { user: params });
      localStorage.setItem('whiteWordCellsUser', JSON.stringify(response.data.user.name));
      return response.data;
    } catch (error) {
      const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

const initialState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
