import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import{ Route, NavLink } from 'react-router-dom';
import FriendsList from './Components/FriendsList'  
import Login from './Components/Login'

class App extends Component {

  render() {
    console.log(this.props.isLoggedIn)
    return (
      <div className="App">
        {this.props.isLoggedIn ? 
          <Route path="/friendsList" exact render={props => <FriendsList {...props} friends={this.props.friends} />} />
          : <Login />}

        
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

export default connect(mapStateToProps, { })(App)
