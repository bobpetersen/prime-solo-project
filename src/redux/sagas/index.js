import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import tempSaga from './tempSaga';
import levelSaga from './levelSaga';
import currentTempSaga from './currentTempSaga';
import currentLevelSaga from './currentLevelSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    tempSaga(),
    levelSaga(),
    currentTempSaga(),
    currentLevelSaga(),
    // watchIncrementAsync()
  ]);
}
