import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import tempSaga from './tempSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    tempSaga(),
    // watchIncrementAsync()
  ]);
}
