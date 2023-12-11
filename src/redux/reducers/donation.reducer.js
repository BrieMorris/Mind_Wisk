//Intial State
const initialState = { 
    donationAmount: null
}; 

//Reducer function 
const donationReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'SET_AMOUNT': 
        return { 
            ...state, 
            donationAmount: action.payload
        }; 
        default: 
        return state; 
    }
}; 

export default donationReducer; 