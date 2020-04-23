import { combineReducers } from 'redux';

import list from './list/reducer';
import print from './print/reducer';

export default combineReducers({
  list,
  print,
});
