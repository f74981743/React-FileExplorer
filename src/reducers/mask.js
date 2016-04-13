import {MASK} from '../constants/ActionTypes';

export default function mask(state = false, action) {
	switch(action.type) {
		case MASK:
            return action.flag
		default:
			return state
	}
}
