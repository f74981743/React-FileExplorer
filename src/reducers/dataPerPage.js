import {CHANGE_DATA_PER_PAGE} from '../constants/ActionTypes';


const initialState = 25


export default function dataPerPage(state = initialState, action) {
	switch(action.type) {
		case CHANGE_DATA_PER_PAGE:
			return action.dataPerPage
		default:
			return state
	}
}
