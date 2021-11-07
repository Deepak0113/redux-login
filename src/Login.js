import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userdetails } from './actions'

const style = {
    logincontainer: {
        width: "50%",
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey"
    },
    input: {
        padding: "5px 7px",
        fontSize: "15px"
    },
    button: {
        marginTop: "10px",
        padding: "5px 7px",
        fontSize: "15px",
        cursor: "pointer"
    }
}

function Login() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const submitBtn = () => {
        dispatch(userdetails(username))
        setUsername("")
    }

    return (
        <div style={{...style.logincontainer}}>
            <h2 style={{textAlign: "center",marginBottom: "20px"}}>LOGIN</h2>
            <input onChange={(e) => setUsername(e.target.value)} value={username} style={{...style.input}} type="text"/>
            <button onClick={() => submitBtn()} style={{...style.button}}>LOGIN</button>
        </div>
    )
}

export default Login
