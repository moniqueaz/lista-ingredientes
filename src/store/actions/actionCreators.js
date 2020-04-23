export function mountToList(list) {
  return {
    type: 'MOUNT_TO_LIST',
    list,
  };
}

export function editToList(item) {
  return {
    type: 'EDIT_TO_LIST',
    item,
  };
}
