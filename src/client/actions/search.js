import {
  CHANGE_SEARCH_BY, CHANGE_SEARCH_TEXT, CHANGE_SEARCH_DATA
} from '../constants/actions';
export function changeSearchBy(by) {
  return {
    type: CHANGE_SEARCH_BY,
    payload: {
      by 
    }
  }
}
export function changeSearchText(text) {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: {
      text
    }
  }
}
export function changeSearchData(data) {
  return {
    type: CHANGE_SEARCH_DATA,
    payload: {
      data
    }
  }
}