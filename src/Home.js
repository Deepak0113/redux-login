import React from 'react'
import { useSelector } from 'react-redux'


function Home() {
    const username = useSelector(state => state.username);
    const isLogged = useSelector(state => state.isLogged);

    return (
        <div>
            {
                isLogged ?
                <h2>Your name is {username}</h2> :
                <h2>loggin in first!!!</h2>
            }
        </div>
    )
}

export default Home
