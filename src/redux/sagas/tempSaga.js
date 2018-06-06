import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import { TEMP_ACTIONS } from '../actions/tempActions';
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTemps() {
    console.log('fetch temps')
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
