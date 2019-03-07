import {FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILED} from '../actions'

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
    case FETCHING_START: 
      return state

    case FETCHING_SUCCESS: 
      return state

    case FETCHING_FAILED: 
      return state

    default:
      return state;
  }
};
 