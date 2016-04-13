import * as types from '../constants/ActionTypes';

const initialState = {
    total: 0,
	datas: [],
    entries: []
}

export default function datas(state = initialState, action) {
	switch(action.type) {
		case types.READ_DATA:
			return {
                total: state.total,
                datas: [
                    ...state.datas, action.item
                ],
                entries: state.entries
            }
        case types.RESET_DATAS:
            return {
                total: state.entries.length,
                datas: [],
                entries: state.entries
            }
        case types.COUNT_TOTAL:
            return {
                total: action.total,
                datas: state.datas,
                entries: state.entries
            }
        case types.READ_ENTRIES:
            return {
                total: state.total,
                datas: state.datas,
                entries: action.entries
            }
		default:
			return state
	}
}
