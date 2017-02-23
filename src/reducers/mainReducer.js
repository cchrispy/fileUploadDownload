/*
** This is the entry point for the reducers that the Redux store will be created from.
** Make sure to remove the sampleReducer in production!
*/

import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import list from './listReducer';

const mainReducer = combineReducers({
  sampleReducer,
  list
})

export default mainReducer;