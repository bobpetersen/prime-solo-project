import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { CURRENT_TEMP_ACTIONS } from '../actions/currentTempActions';
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchCurrentTemps() {
    console.log('fetch CURRENT temp')
    try {
        const currentTemps = yield call(axios.get, '/api/currentTemps')
        console.log(currentTemps)
        yield put({
            type: CURRENT_TEMP_ACTIONS.SET_CURRENT_TEMP,
            payload: currentTemps.data
        });
    } catch (error) {
        console.log(error);
    };
}


function* currentTempSaga() {
    yield takeEvery(CURRENT_TEMP_ACTIONS.FETCH_CURRENT_TEMP, fetchCurrentTemps);
}

export default currentTempSaga;