import React from 'react';
import BackButton from '../BackButton/BackButton';
import './Games.css'

const Games = () => {
    return (
<div className='gamesBackground'>
    <div>
        <h1 className='headerGames'>Games</h1>
        <h2 className='construction'>Under Construction</h2>
        <h3>Come back later...</h3>
    </div>
    <BackButton />
</div>
    )
}

export default Games;