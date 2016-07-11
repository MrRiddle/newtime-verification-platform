import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const shiguangApp = combineReducers({
  todos,
  visibilityFilter
})

export default shiguangApp
