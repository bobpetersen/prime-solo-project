import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import temp from './tempReducer';
import level from './levelReducer';
import currentTemp from './currentTempReducer';
import currentLevel from './currentLevelReducer';

const store = combineReducers({
  user,
  login,
  temp,
  level,
  currentTemp,
  currentLevel,
});

export default store;
