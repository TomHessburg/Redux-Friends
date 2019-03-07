import React, { useState } from 'react'

const AddFriendForm = props => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [formStatus, setFormStatus] = useState(false);

    const handelSetNewFriend = (e, friend) => {
        e.preventDefault();
        props.addFriend(friend);
        setName("");
        setAge("");
        setEmail("");
    }

    const handelFormStatus = e => {
        e.preventDefault()
        setFormStatus(!formStatus);
    }

    return (
        <div className="add-friend">

            <h2>add a friend</h2>
            <button
            className="show-hide-form"
            onClick={handelFormStatus}
            >{!formStatus ? "show form" : "hide form"}</button>

            {formStatus && (
                <form>
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
                onClick={e => {
                    const newFriend = {
                        name: name,
                        age: age,
                        email: email,
                        id: Date.now()
                    }
                    handelSetNewFriend(e, newFriend)
                }}
                >submit</button>
            </form>
            )}

            
        </div>
    );
}
 
export default AddFriendForm;