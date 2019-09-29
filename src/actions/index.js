import { combineReducers } from 'redux';
let nextTodoId = 0;

export const addUser = text => ({
  type: 'ADD_USER',
  id: nextTodoId++,
  text
})

export const editUser = id => ({
  type: 'EDIT_USER',
  id
})

export const toggleSideBar = (display) => ({
   type: 'TOGGLE_SIDEBAR',
   display: false
})
