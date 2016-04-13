import {ADD_PATH_BTN, CLICK_PATH_BTN} from '../constants/ActionTypes';

export default function pathBtns(state = [], action) {
	switch(action.type) {
		case ADD_PATH_BTN:
			return [
                ...state, action.item
            ]
        case CLICK_PATH_BTN:
            return action.items
		default:
			return state
	}
}
