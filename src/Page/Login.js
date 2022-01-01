import React from "react";

const Login = () => {
    return(
        <div style={{marginLeft:"10px"}}>
            <h3><b>Login</b></h3>
            <div style={{marginBottom:"5px"}}>
                <label>Username :</label>
                <input />
            </div>
            <div style={{marginBottom:"30px"}}>
                <label>Password :</label>
                <input />
            </div>
            <button style={{marginBottom:"30px"}}>login</button>
            <p style={{marginBottom:"30px",textDecoration:"underline",fontSize:"18px",color:"blue"}}><a>Forget Your password?</a></p>
            <h3><b>Create Account</b></h3>
            <div style={{marginBottom:"5px"}}>
                <label>Username :</label>
                <input />
            </div>
            <div style={{marginBottom:"30px"}}>
                <label>Password :</label>
                <input />
            </div>
            <button style={{marginBottom:"30px"}}>Create Account</button>
        </div>
    )
}

export default Login;