import fetch from 'isomorphic-fetch'

export const REQUEST_TO_CHECK_LIST = 'REQUEST_TO_CHECK_LIST';
const requestToCheckList = () => {
  return {
    type: REQUEST_TO_CHECK_LIST
  }
}

export const RECIVE_TO_CHECK_LIST = 'RECIVE_TO_CHECK_LIST';
const reciveToCheckList = (data) => {
  return {
    type: RECIVE_TO_CHECK_LIST,
    data
  }
}

export const REQUEST_CHECKED_LIST = 'REQUEST_CHECKED_LIST';
const requestCheckedList = () => {
  return {
    type: REQUEST_CHECKED_LIST
  }
}

export const RECIVE_CHECKED_LIST = 'RECIVE_CHECKED_LIST';
const reciveCheckedList = (data) => {
  return {
    type: RECIVE_CHECKED_LIST,
    data
  }
}

export const REQUEST_DETAIL_INFO = 'REQUEST_DETAIL_INFO';
const requestDetailInfo = (id) => {
  return {
    type: REQUEST_DETAIL_INFO,
    id
  }
}

export const RECIVE_DETAIL_INFO = 'RECIVE_DETAIL_INFO';
const reciveDetailInfo = (id,data) => {
  return {
    type: RECIVE_DETAIL_INFO,
    id,
    data
  }
}

export const REQUEST_SET_PASS = 'REQUEST_SET_PASS';
const requestSetPass = (id) => {
  return {
    type: REQUEST_SET_PASS,
    id
  }
}

export const RECIVE_SET_PASS = 'RECIVE_SET_PASS';
const reciveSetPass = (id,success) => {
  return {
    type: RECIVE_SET_PASS,
    id,
    success
  }
}

export const REQUEST_SET_FAIL = 'REQUEST_SET_FAIL';
const requestSetFail = (id) => {
  return {
    type: REQUEST_SET_FAIL,
    id
  }
}

export const RECIVE_SET_FAIL = 'RECIVE_SET_FAIL';
const reciveSetFail = (id,success) => {
  return {
    type: RECIVE_SET_FAIL,
    id,
    success
  }
}

export function fetchToCheckList() {
 return (dispatch) => {
    dispatch(requestToCheckList())
    return fetch('/getToCheckList',{
        method: "POST",
        credentials: 'include',
      })
      .then((response) => response.json())
      .then((json) => dispatch(reciveToCheckList(json.list)))
      .catch((e) => dispatch(reciveToCheckList([])))
  }
}

export function fetchCheckedList() {
 return (dispatch) => {
    dispatch(requestCheckedList())
    return fetch('/getCheckedList',{
        method: "POST",
        credentials: 'include'
      })
      .then((response) => response.json())
      .then((json) => dispatch(reciveCheckedList(json.list)))
      .catch((e) => dispatch(reciveCheckedList([])))
  }
}

export function fetchDetailInfo(id) {
 return (dispatch) => {
    dispatch(requestDetailInfo(id))
    return fetch('/getDetailInfo',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          id
        })
      })
      .then((response) => response.json())
      .then((json) => dispatch(reciveDetailInfo(id,json.info)))
      .catch((e) => dispatch(reciveDetailInfo(id,{})))
  }
}

export function fetchSetPass(id) {
 return (dispatch) => {
    dispatch(requestSetPass(id))
    return fetch('/setPass',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          id
        })
      })
      .then((response) => response.json())
      .then((json) => dispatch(reciveSetPass(id,json.success)))
      .catch((e) => dispatch(reciveSetPass(id,{})))
  }
}

export function fetchSetFail(id) {
 return (dispatch) => {
    dispatch(requestSetFail(id))
    return fetch('/setFail',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          id
        })
      })
      .then((response) => response.json())
      .then((json) => dispatch(reciveSetFail(id,json.success)))
      .catch((e) => dispatch(reciveSetFail(id,{})))
  }
}