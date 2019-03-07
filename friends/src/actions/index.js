import axios from 'axios';

export const FETCHING_START = "FETCHING_START"; 
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"; 
export const FETCHING_FAILED = "FETCHING_FAILED"; 

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOG_OUT = "LOG_OUT"

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILED = "DELETE_FAILED";

export const ADD_START = "ADD_START"
export const ADD_COMPLETE = "ADD_COMPLETE"
export const ADD_FAILED = "ADD_FAILED"

const token = localStorage.getItem('userToken');






export const fetchFriends = () => dispatch => {

    dispatch({ type: FETCHING_START});

    axios.get("http://localhost:5000/api/friends", {headers: {Authorization: token}})
        .then(res => dispatch({type: FETCHING_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: FETCHING_FAILED, payload: err}))
}

export const loginAction = credentials => dispatch => {
    console.log(credentials);
    dispatch({ type: LOGIN_START});

    axios.post('http://localhost:5000/api/login', credentials)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res, credentials: credentials}))
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err}))
}

export const logOut = () => {
    return{
        type: LOG_OUT
    }
}


export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_START});

    axios.delete(`http://localhost:5000/api/friends/${id}`, {headers: {Authorization: token}})
        .then(res => dispatch({type: DELETE_SUCCESS, payload: res}))
        .catch(err => dispatch({ type: DELETE_FAILED, payload: err}))
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_START});
    console.log(friend);

    axios.post(`http://localhost:5000/api/friends`, friend, {headers: {Authorization: token}}  )
        .then(res => dispatch({type: ADD_COMPLETE, payload: res}))
        .catch(err => dispatch({ type: ADD_FAILED, payload: err}))
}