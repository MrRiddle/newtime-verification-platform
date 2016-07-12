import { combineReducers } from 'redux'
import { toCheckList } from './toCheckList'
import { checkedList } from './checkedList'
import { detailInfo } from './detailInfo'
import { modify } from './modify'

const shiguangReducer = combineReducers({
  toCheckList,
  checkedList,
  detailInfo,
  modify
})

export default shiguangReducer
