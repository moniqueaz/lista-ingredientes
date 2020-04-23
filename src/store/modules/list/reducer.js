export default function list(state = [], action) {
  switch (action.type) {
    case 'MOUNT_TO_LIST':
      return [...state, action.list];
    case 'SET_TO_LIST':
      console.log('action: ', action);
      return action.list;
    case 'EDIT_TO_LIST':
      const newList = state.map(item => {
        if (item.id === action.item.id) {
          return { ...action.item };
        } else {
          return item;
        }
      });
      return [...newList];
    default:
      return state;
  }
}
