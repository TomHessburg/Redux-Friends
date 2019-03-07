import React, { useState } from 'react'

const AddFriendForm = props => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const handelSetNewFriend = friend => {
        props.addFriend(friend);
    }

    return (
        <div>
            <h2>add a friend</h2>

            <label>name:</label>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" />

            <label>age:</label>
            <input 
            value={age}
            onChange={e => setAge(e.target.value)}
            type="number" />

            <label>email:</label>
            <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text" />

            <button
            onClick={() => {
                const newFriend = {
                    name: name,
                    age: age,
                    email: email,
                    id: Date.now()
                }
                handelSetNewFriend(newFriend)
            }}
            >submit</button>
        </div>
    );
}

export default AddFriendForm;