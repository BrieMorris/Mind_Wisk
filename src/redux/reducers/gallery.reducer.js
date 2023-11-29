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

export default combineReducers({
  userGallery
});