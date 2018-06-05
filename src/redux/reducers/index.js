import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import temp from './tempReducer';

const store = combineReducers({
  user,
  login,
  temp,
});

export default store;
