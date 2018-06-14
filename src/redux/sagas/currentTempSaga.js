import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { CURRENT_TEMP_ACTIONS } from '../actions/currentTempActions';

function* fetchCurrentTemp() {
    console.log('fetch CURRENT temp')
    try {
        const currentTemp = yield call(axios.get, '/api/currentTemps')
        console.log(currentTemp)
        yield put({
            type: CURRENT_TEMP_ACTIONS.SET_CURRENT_TEMP,
            payload: currentTemp.data
        });
    } catch (error) {
        console.log(error);
    };
}

function* currentTempSaga() {
    yield takeEvery(CURRENT_TEMP_ACTIONS.FETCH_CURRENT_TEMP, fetchCurrentTemp);
}

export default currentTempSaga;