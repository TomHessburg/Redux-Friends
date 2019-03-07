import {
    FETCHING_START, 
    FETCHING_SUCCESS, 
    FETCHING_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOG_OUT
} from '../actions'
 
const initialState = {
    isLoggedIn: false,
    token: "",
    deletingFriend: false,
    fetchingFriends: false,
    friends: [{
        id: 1,
        name: 'Example Friend',
        age: 24,
        email: 'example@lambdaschool.com',
      }],
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const reducer = (state = initialState, action) => {
 
  switch (action.type) {

            //fetch data stuff
    case FETCHING_START: 
        return state

    case FETCHING_SUCCESS: 
    console.log(action.payload);
        return {
            ...state,
            friends: action.payload.data
        
        }

    case FETCHING_FAILED: 
        return state







            //login stuff
    case LOGIN_START: 
        return state

    case LOGIN_SUCCESS: 
        // window.localStorage.setItem("userToken", action.payload.data.payload)
        return {
            ...state,
            isLoggedIn: true,
            token: action.payload.data.payload
            }

    case LOGIN_FAILED: 
        console.log(action.payload);
        return state

    case LOG_OUT:
        return {
            ...state,
            isLoggedIn: false,
            token: ""
        }

    default:
        return state;
  }
};
 