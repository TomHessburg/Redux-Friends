import {
    FETCHING_START, 
    FETCHING_SUCCESS, 
    FETCHING_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
    } from '../actions'

const initialState = {
    isLoggedIn: false,
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [{
        id: 1,
        name: 'Example Friend',
        age: 24,
        email: 'example@lambdaschool.com',
      }],
    error: null
}

export const reducer = (state = initialState, action) => {
 
  switch (action.type) {

            //fetch data stuff
    case FETCHING_START: 
        return state

    case FETCHING_SUCCESS: 
        return state

    case FETCHING_FAILED: 
        return state


            //login stuff
    case LOGIN_START: 
        console.log("here");
        return state

    case LOGIN_SUCCESS: 
        console.log("here");
        return state

    case LOGIN_FAILED: 
        console.log("here");
        return state

    default:
        return state;
  }
};
 