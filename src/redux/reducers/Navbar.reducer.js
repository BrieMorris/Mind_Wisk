
const initialState = {
  level: 'Insufficient',
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return { ...state, level: action.payload };
    default:
      return state;
  }
};


export default navBarReducer;
