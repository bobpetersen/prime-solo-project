import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { CURRENT_LEVEL_ACTIONS } from '../actions/currentLevelActions';

function* fetchCurrentLevel() {
    console.log('fetch CURRENT level')
    try {
        const currentLevel = yield call(axios.get, '/api/currentLevel')
        console.log(currentLevel)
        yield put({
            type: CURRENT_LEVEL_ACTIONS.SET_CURRENT_LEVEL,
            payload: currentLevel.data
        });
    } catch (error) {
        console.log(error);
    };
}


function* currentLevelSaga() {
    yield takeEvery(CURRENT_LEVEL_ACTIONS.FETCH_LEVEL, fetchCurrentLevel);
}

export default currentLevelSaga;