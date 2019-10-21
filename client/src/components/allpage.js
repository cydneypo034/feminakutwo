import React from 'react';
import Home from './homeheader.js';
import About from './about.js';
import Parallex from './parellex.js';
import Shops from './shops.js';
import User from './users.js';
import VideoGames from './videogames.js';


function MyPage () {
    return (
        <div>
        <Home />
        <About />
        <Parallex />
        <User />
        <Shops />
        <VideoGames />
      </div>
    )
}

export default MyPage;