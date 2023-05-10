import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import repositoriesReducer from '../reducers/repositoriesReducer';
import modalReducer from '../reducers/modalReducer';

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    modal: modalReducer,
  },
  middleware: [thunk],
});
