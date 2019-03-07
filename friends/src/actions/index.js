import axios from 'axios';

export const FETCHING_START = "FETCHING_START"; 
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"; 
export const FETCHING_FAILED = "FETCHING_FAILED"; 



export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_START});

    axios.get('')
        .then(res => dispatch({type: FETCHING_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: FETCHING_FAILED, payload: err}))
}