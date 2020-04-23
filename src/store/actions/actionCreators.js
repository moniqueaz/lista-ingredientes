export function mountToList(list) {
  return {
    type: 'MOUNT_TO_LIST',
    list,
  };
}

export function setToList(list) {
  return {
    type: 'SET_TO_LIST',
    list,
  };
}

export function editToList(item) {
  return {
    type: 'EDIT_TO_LIST',
    item,
  };
}

export function deleteToList(id) {
  return {
    type: 'DELETE_TO_LIST',
    id,
  };
}

export function editToPrint(item) {
  return {
    type: 'EDIT_TO_PRINT',
    item,
  };
}
