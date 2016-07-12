import { REQUEST_CHECKED_LIST, RECIVE_CHECKED_LIST } from '../actions'

export function checkedList(state = {
  isWaiting: false,
  list: []
}, action) {
  switch (action.type) {
    case REQUEST_CHECKED_LIST:
      return Object.assign({}, state, {
        isWaiting: true
      })
    case RECIVE_CHECKED_LIST:
      return Object.assign({}, state, {
        isWaiting: false,
        list: action.data
      })
    default:
      return state
  }
}
