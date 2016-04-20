import {SHOW_MENU} from '../constants/ActionTypes';

export default function displayModeMenu(state = false, action) {
	switch(action.type) {
		case SHOW_MENU:
		return action.flag
		default:
			return state
	}
}
