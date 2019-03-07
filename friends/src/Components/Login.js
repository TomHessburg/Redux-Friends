import React, { useState } from 'react';


const Login = props => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <form>
                <label>username:</label>
                <input 
                type="text" 
                value={userName}
                onChange={e => setUserName(e.target.value)}
                />

                <label>password:</label>
                <input 
                type="text" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                
                <button 
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    props.logUserIn({
                        username: userName,
                        password: password
                    })
                }}
                > log in </button>
            </form>

        </div>
    );
}


export default Login