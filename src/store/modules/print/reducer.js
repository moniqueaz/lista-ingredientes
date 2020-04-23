export default function print(state = [], action) {
  switch (action.type) {
    case 'EDIT_TO_PRINT':
      console.log('i: ', action);
      console.log('state.length: ', state.length);
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
    default:
      return state;
  }
}
