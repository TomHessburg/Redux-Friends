import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import{ Route, NavLink } from 'react-router-dom';
import FriendsList from './Components/FriendsList'  
import Login from './Components/Login'

import { loginAction, logOut } from './actions'


class App extends Component {

  logUserIn = credentials => {
    console.log(credentials);
    this.props.loginAction(credentials)
  }

  render() {
    console.log(this.props.isLoggedIn)
    return (
      <div className="App">
        {this.props.isLoggedIn ? 
          <FriendsList friends={this.props.friends} logOut={this.props.logOut} />
          : <Login logUserIn={this.logUserIn} />}

        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    friends: state.friends,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { loginAction, logOut })(App)
