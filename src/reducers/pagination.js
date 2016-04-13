import {CLICK_PAGE} from '../constants/ActionTypes';


const initialState = {
	currentPage: 1,
	pageState: [1, 2, 3, 4, 5]
}

export default function pagination(state = initialState, action) {
	switch(action.type) {
		case CLICK_PAGE:
			return Object.assign({}, state, {
	        	currentPage: action.nextPage,
				pageState: action.pageState
		  	})
		default:
			return state
	}
}
