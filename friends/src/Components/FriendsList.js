import React from 'react';


const FriendsList = props => {
    return(
        <div className="friends-list">
            <h1>Your Friends List</h1>
            <button 
            onClick={props.logOut}
            > log out </button>
            <hr />
            {props.friends.map(friend => {
                return(
                    <div key={friend.id} className="individual-friend">
                        <h3>{friend.name}</h3>
                        <p>{friend.email}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default FriendsList;