import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend, addFriend } from '../actions';
import { withRouter } from 'react-router-dom';
import AddFriendForm from './AddFriendForm'

class FriendsList extends React.Component {

    componentDidMount(){
        console.log("CDM");
        this.props.fetchFriends();
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.deleteFriend(id)
        
    }

    render(){
        return(
            <div className="friends-list">
                <h1>Your Friends List</h1>
                <button 
                className="logout-button"
                onClick={this.props.logOut}
                > log out </button>
                <hr />
                <AddFriendForm addFriend={this.props.addFriend} />
                {this.props.fetchingFriends && (<div>loading your friends...</div>)}
                <div className="just-friends">
                    {this.props.friends.map(friend => {
                        return(
                            <div key={friend.id} className="individual-friend">
                                <h3>{friend.name}</h3>
                                <p>{friend.email}</p>
                                <button 
                                id={friend.id}
                                onClick={e => this.deleteFriend(e, e.target.id)}
                                >delete friend</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
      friends: state.friends,
      token: state.token,
      isLoggedIn: state.isLoggedIn,
      fetchingFriends: state.fetchingFriends
    }
  }
  
export default withRouter(connect(mapStateToProps, { fetchFriends, deleteFriend, addFriend })(FriendsList))
