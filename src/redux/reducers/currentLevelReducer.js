import { combineReducers } from 'redux';
import { CURRENT_LEVEL_ACTIONS } from '../actions/currentLevelActions';

const currentLevelReducer = (state = [], action) => {

    switch (action.type) {
        case CURRENT_LEVEL_ACTIONS.SET_CURRENT_LEVEL:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    currentLevelReducer,
});