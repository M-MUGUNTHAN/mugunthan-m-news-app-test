import {DATA_LIST} from '../action/dataAction';


export default function dataReducer(state=[],action){
switch(action.type){
    case DATA_LIST:
        return[...state,action.value]
    default:
        return state
}
}