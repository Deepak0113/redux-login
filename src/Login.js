import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
    const isLogging = useSelector(state => state.isLogged);

    const loginBtn = () => {
        localStorage.setItem("username", username)
        dispatch(userdetails("LOGIN", username))
        setUsername("")
    }

    const logoutBtn = () => {
        localStorage.removeItem("username")
        dispatch(userdetails("LOGOUT", ""))
        setUsername("")
    }

    return (
        <div style={{...style.logincontainer}}>
            {
                !isLogging ?
                <>
                    <h2 style={{textAlign: "center",marginBottom: "20px"}}>LOGIN</h2>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} style={{...style.input}} type="text"/>
                    <button onClick={() => loginBtn()} style={{...style.button}}>LOGIN</button>
                </> :
                <button onClick={() => logoutBtn()} style={{...style.button}}>LOGOUT</button>
            }
        </div>
    )
}

export default Login
