import React from 'react';


const Login = props => {
    return(
        <div>
            <form>
                <label>username:</label>
                <input type="text" />

                <label>password:</label>
                <input type="text" />
                
                <button type="submit"> log in </button>
            </form>

        </div>
    );
}


export default Login