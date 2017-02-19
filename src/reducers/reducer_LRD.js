import {FETCH_LRD} from '../actions/index';

export default function(state=null,action){
	switch(action.type){
		case FETCH_LRD:
			return action.payload.data;
			break;
	}
	return state;
}