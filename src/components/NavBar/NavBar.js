import React from 'react';
import'./NavBar.css';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';


const NavBar = () => {
    return (
    <div className='master'>
        <div className='logo'>
            <Tilt><img className='logoImage' src='./BHBLogo.jpg' alt='BHB' /></Tilt>
        </div>
        <nav className="top-section pl3 pr3 ml3 mr3 ba br1">

                <div className='buttonS'>
                    <Link to='*'>
                        <button className='grow'>
                            Home
                        </button>
                    </Link>
                </div>
                <div className='buttonS'>
                    <Link to='/collection'>
                        <button className='grow'>
                            Collection
                        </button>
                    </Link>
                </div>
                <div className='buttonS '>
                    <Link to='/content'>
                        <button className='grow'>
                            Content
                        </button>
                    </Link>
                </div>
                <div className='buttonS '>
                    <Link to='/games'>
                        <button className='grow'>
                            Games
                        </button>
                    </Link>
                </div>
                <div className='buttonS '>
                    <Link to='/teams'>
                        <button className='grow'>
                            Meet the Team
                        </button>
                    </Link>
                </div>
        </nav>
    </div>
    );
}

export default NavBar;