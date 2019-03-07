import {
    FETCHING_START, 
    FETCHING_SUCCESS, 
    FETCHING_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOG_OUT,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILED,
    ADD_START,
    ADD_COMPLETE,
    ADD_FAILED
} from '../actions'
 
const initialState = {
    isLoggedIn: false,
    token: "",
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
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



                //delete stuff
    case DELETE_START:
        return state

    case DELETE_SUCCESS: 
        console.log(action.payload);
        return {
            ...state,
            friends: action.payload.data
        }
    case DELETE_FAILED: 
        console.log(action.payload);
        return state



                //add friend stuff
    case ADD_START:
        return state

    case ADD_COMPLETE: 
        console.log(action.payload);
        return {
            ...state,
            friends: action.payload.data
        }
    case ADD_FAILED: 
        console.log(action.payload);
        return state




    default:
        return state;
  }
};
 