import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import { TEMP_ACTIONS } from '../actions/tempActions';
// import { getPondTemps } from '../requests/tempRequests'

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTemps() {
    console.log('fetch')
    try {
        const temps = yield call(axios.get, '/api/temps')
        console.log(temps)
        yield put({
            type: TEMP_ACTIONS.SET_TEMP,
            payload: temps.data
        });
    } catch (error) {
        console.log(error);
    };
}


function* tempSaga() {
    yield takeEvery(TEMP_ACTIONS.FETCH_TEMP, fetchTemps);
}

export default tempSaga;
