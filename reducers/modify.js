import { REQUEST_SET_PASS, RECIVE_SET_PASS, REQUEST_SET_FAIL, RECIVE_SET_FAIL } from '../actions'

export function modify(state = {
  isWaiting: false,
  id: null,
  success: true
}, action) {
  switch (action.type) {
    case REQUEST_SET_PASS:
    case REQUEST_SET_FAIL:
      return Object.assign({}, state, {
        isWaiting: true
      })
    case RECIVE_SET_PASS:
    case RECIVE_SET_FAIL:
      return Object.assign({}, state, {
        isWaiting: false,
        id: action.id,
        success: action.data
      })
    default:
      return state
  }
}
