import { REQUEST_DETAIL_INFO, RECIVE_DETAIL_INFO } from '../actions'

export function detailInfo(state = {
  isWaiting: false,
  id: null,
  info: {}
}, action) {
  switch (action.type) {
    case REQUEST_DETAIL_INFO:
      return Object.assign({}, state, {
        isWaiting: true
      })
    case RECIVE_DETAIL_INFO:
      return Object.assign({}, state, {
        isWaiting: false,
        id: action.id,
        info: action.data
      })
    default:
      return state
  }
}
