
export const REQUEST_TO_CHECK_LIST = 'REQUEST_TO_CHECK_LIST';
export const requestToCheckList = () => {
  return {
    type: REQUEST_TO_CHECK_LIST
  }
}

export const RECIVE_TO_CHECK_LIST = 'RECIVE_TO_CHECK_LIST';
export const reciveToCheckList = (data) => {
  return {
    type: RECIVE_TO_CHECK_LIST,
    data
  }
}

export const REQUEST_CHECKED_LIST = 'REQUEST_CHECKED_LIST';
export const requestCheckedList = () => {
  return {
    type: REQUEST_CHECKED_LIST
  }
}

export const RECIVE_CHECKED_LIST = 'RECIVE_CHECKED_LIST';
export const reciveCheckedList = (data) => {
  return {
    type: RECIVE_CHECKED_LIST,
    data
  }
}
