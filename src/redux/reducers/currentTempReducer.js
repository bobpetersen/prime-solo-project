import { combineReducers } from 'redux';
import { CURRENT_TEMP_ACTIONS } from '../actions/currentTempActions';

const currentTempReducer = (state = [], action) => {
    switch (action.type) {
        case CURRENT_TEMP_ACTIONS.SET_CURRENT_TEMP:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    currentTempReducer,
});