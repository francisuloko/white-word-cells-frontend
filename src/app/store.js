import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import cellReducer from '../slices/cells';
import messageReducer from '../slices/message';

const reducer = {
  auth: authReducer,
  cells: cellReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
