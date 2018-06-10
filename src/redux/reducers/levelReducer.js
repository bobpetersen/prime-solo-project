import { combineReducers } from 'redux';
import { LEVEL_ACTIONS } from '../actions/levelActions';

const levelReducer = (state = [], action) => {
    switch (action.type) {
        case LEVEL_ACTIONS.SET_LEVEL:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    levelReducer,
});