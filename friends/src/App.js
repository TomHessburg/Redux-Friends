import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import{ Route, withRouter, Redirect } from 'react-router-dom';
import FriendsList from './Components/FriendsList'  
import Login from './Components/Login'

import { loginAction, logOut } from './actions'
 

class App extends Component {


  logUserIn = credentials => {
    console.log(credentials);
    this.props.loginAction(credentials)
  }

  render() {
    return (
      <div className="App">
        {!this.props.isLoggedIn ? 
          <Redirect to="/login" /> 
          : <Redirect to="/friends-list"/>}
          {this.props.isLoggingIn && (<div>loading your account...</div>)}


          <Route path="/login" exact render={props => <Login {...props} logUserIn={this.logUserIn} />} />
          <Route path="/friends-list"  render={props => <FriendsList {...props} logOut={this.props.logOut} />} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    friends: state.friends,
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    isLoggingIn: state.isLoggingIn
  }
}

export default withRouter(connect(mapStateToProps, { loginAction, logOut })(App))
