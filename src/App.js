import React, { useEffect } from 'react'
import Login from './Login';
import TopNav from './TopNav';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home'; 
import { useDispatch } from 'react-redux';
import { userdetails } from './actions';

const style = {
    app: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    appbody: {
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        let uname = localStorage.getItem("username");
        if(uname){
            dispatch(userdetails("LOGIN", uname))
        }
    },[])

    return (
        <div style={{...style.app}}>
            <Router>
                <TopNav/>
                <div style={{...style.appbody}}>
                    
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
