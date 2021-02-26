import {ADD_NEW_DATA,SELECT_DATA} from '../actions';

const intialState=['hello world', 'learn react'];

function Data(state='intialState',action){
    switch(action.type){
        case  ADD_NEW_DATA :
            let newState = state;
            newState.push(action.payload);
            state=newState;
            return state;


            case SELECT_DATA :
                return state;
            default:
                return state;
    }

}

export default Data;