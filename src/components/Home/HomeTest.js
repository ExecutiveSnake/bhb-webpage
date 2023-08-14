import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeTest.css';
import City from './Radio_street_EP3.jpg';
import ContentAnimation from './ContentAnimationPic.png';
import AdoptionAnimation from './AdoptionAnimationPic.png';
import GamesAnimation from './GamingAnimationPic.png';
import NavBarTest from '../NavBar/NavBarTest';

const Home = () => {
  const [background, setBackground] = useState(`url(${City})`);
  const [hoveredNavItem, setHoveredNavItem] = useState('Hover Over a Door and Explore');

  useEffect(() => {
    // Function to preload the images
    const preloadImages = (images) => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = image;
        });
      });
    };

    // Preload the images initially
    preloadImages([ContentAnimation, AdoptionAnimation, GamesAnimation, City]);

    // Set an interval to periodically preload images after every 5 minutes (adjust as needed)
    const preloadInterval = setInterval(() => {
      preloadImages([ContentAnimation, AdoptionAnimation, GamesAnimation, City]);
    }, 1500); // 30 seconds

    // Clean up the interval on unmount
    return () => {
      clearInterval(preloadInterval);
    };
  }, []);

  const handleBackgroundChangesContent = () => {
    setBackground(`url(${ContentAnimation})`);
  };

  const handleBackgroundChangesAdoption = () => {
    setBackground(`url(${AdoptionAnimation})`);
  };

  const handleBackgroundChangesGames = () => {
    setBackground(`url(${GamesAnimation})`);
  };

  const handleBackgroundReset = () => {
    setBackground(`url(${City})`);
    setHoveredNavItem('Home');
  };

  return (
    <div
      style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <NavBarTest hoveredNavItem={hoveredNavItem} />
      <div className='master-container'>
        <div style={{ backgroundSize: 'cover', position: 'relative' }}>
          <Link
            to='games'
            onMouseEnter={() => setHoveredNavItem('Games')}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <button
              className='hoverable-button games'
              onMouseEnter={handleBackgroundChangesGames}
              onMouseLeave={handleBackgroundReset}
            >
           
            </button>
          </Link>
          <Link
            to='collection'
            onMouseEnter={() => setHoveredNavItem('Adoption')}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <button
              className='hoverable-button adoption'
              onMouseEnter={handleBackgroundChangesAdoption}
              onMouseLeave={handleBackgroundReset}
            >
              
            </button>
          </Link>
          <Link
            to='content'
            onMouseEnter={() => setHoveredNavItem('Content')}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <button
              className='hoverable-button content'
              onMouseEnter={handleBackgroundChangesContent}
              onMouseLeave={handleBackgroundReset}
            >
          
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


