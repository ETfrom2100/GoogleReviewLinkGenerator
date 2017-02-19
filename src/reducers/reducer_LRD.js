import {SET_FETCHING_STATE,FETCH_LRD} from '../actions/index';

const INITIAL_STATE = {isFetching:false, value:null};
export default function(state=INITIAL_STATE,action){
	switch(action.type){
		case FETCH_LRD:
			
			return {isFetching:false, value:action.payload.data};
			break;
		case SET_FETCHING_STATE:
			
			return {isFetching:action.payload,value:null};
			break;
	}
	return state;
}