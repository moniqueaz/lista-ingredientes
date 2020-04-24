export default function print(state = [], action) {
  switch (action.type) {
    case 'MOUNT_TO_PRINT':
      return [...action.list];
    case 'EDIT_TO_PRINT':
      if (action.isCheck) {
        return [...state, action.item];
      } else {
        const result = state.filter(item => item.id !== action.item.id);
        return [...result];
      }
    default:
      return state;
  }
}
