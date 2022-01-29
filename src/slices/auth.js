/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import whiteWordCellsAPI from '../common/whiteWordCellsAPI';

const user = JSON.parse(localStorage.getItem('whiteWordCellsUser'));

export const login = createAsyncThunk(
  'auth/login',
  async (params, thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.post('api/vi/login', { user: params });
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

export const loginStatus = createAsyncThunk(
  'auth/login',
  async (thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.get('api/v1/loggedin');
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

export const register = createAsyncThunk(
  'auth/register',
  async (params, thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.post('api/v1/users', { user: params });
      return response.data;
    } catch (error) {
      const message = (error.response && error.response && error.response.message)
        || error.message
        || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout', async (thunkAPI) => {
    try {
      const response = await whiteWordCellsAPI.delete('api/v1/logout');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const initialState = user ? {
  user,
  isLoggedIn: true,
  status: 'idle',
  error: null,
} : {
  user: null,
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = action.payload.user;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = null;
    },
    [loginStatus.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = action.payload.user;
    },
    [loginStatus.rejected]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = action.payload.logged_in;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
