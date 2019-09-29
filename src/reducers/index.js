import { combineReducers } from 'redux';
import users from './users';
import buttons from './buttons';

export default combineReducers({
  users,
  buttons
})
