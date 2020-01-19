import {LOADING_FAILED,LOADING_SUCCESS,LOADING} from '../action/dataAction';

const initialState={
    loading:false,
    dataList:[],
    error:null,
}
export default function dataReducer(state=initialState,action){
switch(action.type){
    case LOADING:
        return{
            ...state,
            loading:true
        }
    case LOADING_SUCCESS:
            return{
                dataList:action.value,
                loading:false,
                error:null
            }
    case LOADING_FAILED:
        return{
            ...state,
            loading:false,
            error:action.value
        }
    
    default:
        return state
}
}