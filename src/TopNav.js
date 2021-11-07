import React from 'react';
import {
    Link
} from "react-router-dom";

const style = {
    topnav: {
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "grey"
    },
    item: {
        margin: "0 50px",
        color: "white",
        cursor: "pointer"
    }
}

function TopNav() {
    return (
        <div style={{...style.topnav}}>
            <Link to="/" style={{textDecoration: "none"}}>
                <p style={{...style.item}}>HOME</p>
            </Link>
            <Link to="/login" style={{textDecoration: "none"}}>
                <p style={{...style.item}}>LOGIN</p>
            </Link>
        </div>
    )
}

export default TopNav
