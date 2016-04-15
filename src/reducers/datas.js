import * as types from '../constants/ActionTypes';

const initialState = {
	datas: [],
    entries: []
}

export default function datas(state = initialState, action) {
	switch(action.type) {
		case types.READ_DATA:
			return {
                datas: [
                    ...state.datas, action.item
                ],
                entries: state.entries
            }
        case types.RESET_DATAS:
            return {
                datas: [],
                entries: state.entries
            }
        case types.COUNT_TOTAL:
            return {
                datas: state.datas,
                entries: state.entries
            }
        case types.READ_ENTRIES:
            return {
                datas: state.datas,
                entries: action.entries
            }
		default:
			return state
	}
}
