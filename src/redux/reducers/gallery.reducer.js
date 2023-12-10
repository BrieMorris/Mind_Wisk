import { combineReducers } from "redux";

const userGallery = (state = [], action ) => {
  switch (action.type) {
    case 'SET_ALL_IMAGES':
      return action.payload;
    case 'UNSET_ALL_IMAGES':
      return [];
    default:
      return state;
  }
};

// reducers/authReducer.js
const initialState = {
  isLoggedIn: false,
  // other authentication-related state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    // other authentication-related actions
    default:
      return state;
  }
};



export default combineReducers({
  userGallery,
  authReducer,
});