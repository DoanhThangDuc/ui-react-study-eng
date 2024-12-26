import { combineReducers } from '@reduxjs/toolkit';
import modalLoginReducer from './modalLogin/modalLoginSlice';

const modalReducer = combineReducers({
  modalLogin: modalLoginReducer,
});

export default modalReducer;
