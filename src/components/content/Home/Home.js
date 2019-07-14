import React from 'react'
import Profile from './Profile'
import Intro from './Intro'

const Home = () => {

    return (
        <div className="home-container">
            <div className="page-name">
                <p>Home</p>
            </div>
            <Profile />
            <Intro />
        </div>
    )
}

export default Home 