import { combineReducers } from 'redux';
import LRDReducer from './reducer_LRD';
import BizReducer from './reducer_biz';

const rootReducer = combineReducers({
  LRD:LRDReducer,
  biz:BizReducer
});

export default rootReducer;
