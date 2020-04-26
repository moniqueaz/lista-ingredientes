export default function print(
  state = {
    date: '',
    print: [],
  },
  action
) {
  switch (action.type) {
    case 'MOUNT_TO_DATA':
      return {
        date: action.date,
        print: [...state.print],
      };
    case 'MOUNT_TO_PRINT':
      return { ...state, print: [...action.list] };
    case 'EDIT_TO_PRINT':
      if (action.isCheck) {
        return { ...state, print: [...state.print, action.item] };
      } else {
        const result = state.print.filter(item => item.id !== action.item.id);
        return { ...state, print: [...result] };
      }
    default:
      return state;
  }
}
