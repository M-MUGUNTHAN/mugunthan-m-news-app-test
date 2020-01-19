import {put,takeLatest} from 'redux-saga/effects';
import {loadingSuccess, loadingfailed,LOADING} from '../action/dataAction';
import newsFetchApi from './Api';

function* fetchNews(){
    try{
      const receiveArticles=yield newsFetchApi();
      yield put(loadingSuccess(receiveArticles));
    }
    catch(e){
     yield put(loadingfailed(e));
    }
}

export default function* watchFetchNews(){
    yield takeLatest(LOADING,fetchNews);
}