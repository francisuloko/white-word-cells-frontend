import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/user';
import authReducer from '../slices/auth';
import cellReducer from '../slices/cells';
import messageReducer from '../slices/message';
import instructionsReducer from '../slices/how-it-works';

const reducer = {
  user: userReducer,
  auth: authReducer,
  cells: cellReducer,
  message: messageReducer,
  instructions: instructionsReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
