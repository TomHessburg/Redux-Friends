import axios from 'axios';

export const FETCHING_START = "FETCHING_START"; 
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"; 
export const FETCHING_FAILED = "FETCHING_FAILED"; 

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOG_OUT = "LOG_OUT"



export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_START});

    axios.get("")
        .then(res => dispatch({type: FETCHING_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: FETCHING_FAILED, payload: err}))
}



export const loginAction = credentials => dispatch => {
    console.log(credentials);
    dispatch({ type: LOGIN_START});

    axios.post('http://localhost:5000/api/login', credentials)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err}))
}

export const logOut = () => {
    return{
        type: LOG_OUT
    }
}