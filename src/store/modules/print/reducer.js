export default function print(state = [], action) {
  switch (action.type) {
    case 'MOUNT_TO_PRINT':
      if (state.length) {
        const newList = state.filter(item => {
          return item.id !== action.item.id;
        });
        if (state.length !== newList.length) {
          return [...newList];
        } else {
          return [...state, action.item];
        }
      } else {
        return [action.item];
      }
    case 'EDIT_TO_PRINT':

    default:
      return state;
  }
}
