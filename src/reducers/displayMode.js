import * as types from '../constants/ActionTypes';

const initialState = 0;

export default function displayMode(state = initialState, action) {
	switch(action.type) {
		case types.SELECT_MODE:
			return action.displayMode
		default:
			return state
	}
}
