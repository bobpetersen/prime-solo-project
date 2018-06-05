import { combineReducers } from 'redux';
import { TEMP_ACTIONS } from '../actions/tempActions';

const tempReducer = (state = [], action) => {
    switch (action.type) {
        case TEMP_ACTIONS.SET_TEMP:
            return action.payload
        default:
            return state;
    }
};



export default combineReducers({
    tempReducer,

});