import { combineReducers } from '@reduxjs/toolkit';
import modalLoginReducer from './modalLoginSlice';

const modalReducer = combineReducers({
  modalLogin: modalLoginReducer,
});

export default modalReducer;
