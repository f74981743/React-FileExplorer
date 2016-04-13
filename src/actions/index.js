import * as types from '../constants/ActionTypes';

export function readData(item) {
  return {
    type: types.READ_DATA,
    item: item
  }
}

export function readEntries(entries) {
    return {
        type: types.READ_ENTRIES,
        entries: entries
    }
}

export function countTotal(total) {
    return {
        type: types.COUNT_TOTAL,
        total: total
    }
}

export function resetDatas() {
    return {
        type: types.RESET_DATAS
    }
}

export function addPathBtn(item) {
    return {
        type: types.ADD_PATH_BTN,
        item: item 
    }
}

export function clickPathBtn(items) {
    return {
        type: types.CLICK_PATH_BTN,
        items: items
    }
}

export function mask(flag) {
    return {
        type: types.MASK,
        flag: flag
    }
}

export function clickPage(nextPage, pageState) {
  return {
    type: types.CLICK_PAGE,
    nextPage: nextPage,
	pageState: pageState
  }
}