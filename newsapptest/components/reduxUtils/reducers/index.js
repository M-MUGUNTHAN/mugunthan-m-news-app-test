import {combineReducers } from 'redux';
import dataReducer from './dataReducer';
const rootReducer = combineReducers({
    news:dataReducer
  })
  export default rootReducer