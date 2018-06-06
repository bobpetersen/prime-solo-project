import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import temp from './tempReducer';
import level from './levelReducer';

const store = combineReducers({
  user,
  login,
  temp,
  level,
});

export default store;
