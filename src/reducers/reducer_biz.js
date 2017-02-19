import {SELECT_BIZ} from '../actions/index';

export default function(state=null,action){
	switch(action.type)
	{
		case SELECT_BIZ:
			return action.payload;
		break;
	}
	return state;
}