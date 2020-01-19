export const LOADING ='LOADING';
export const LOADING_SUCCESS="LOADING_SUCCESS";
export const LOADING_FAILED='LOADING_FAILED';

export const loading=()=>({type:LOADING});
export const loadingSuccess=(data)=>({type:LOADING_SUCCESS,value:data});
export const loadingfailed=(error)=>({type:LOADING_FAILED,value:error});