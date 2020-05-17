import {combineReducers} from 'redux';
import select from './select';
import listUser from './user';


const stateReducer = combineReducers({
    select,
    listUser

})

export default stateReducer;