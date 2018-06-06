import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LEVEL_ACTIONS } from '../actions/levelActions';
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchLevels() {
    console.log('fetch levels')
    try {
        const levels = yield call(axios.get, '/api/level')
        console.log(levels)
        yield put({
            type: LEVEL_ACTIONS.SET_LEVEL,
            payload: levels.data
        });
    } catch (error) {
        console.log(error);
    };
}


function* levelSaga() {
    yield takeEvery(LEVEL_ACTIONS.FETCH_LEVEL, fetchLevels);
}

export default levelSaga;