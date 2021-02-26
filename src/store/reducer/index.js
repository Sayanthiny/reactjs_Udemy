import { combineReducers } from "redux";
import Number from './Num_reducer';
import Data from './Data_reducer';

const rootReducer= combineReducers({
    Data,
    Number
})

export default rootReducer;