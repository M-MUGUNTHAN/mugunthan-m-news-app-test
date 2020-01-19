import {call} from 'redux-saga/effects';
import watchFetchNews from './newsFetchSaga';

export default function* rootSaga(){
yield call(watchFetchNews)
}