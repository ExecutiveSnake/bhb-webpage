import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Background from './SHILLING_GRILLIN_STUDIO.png';
import BackButton from '../BackButton/BackButton';
import './Content.css';

const Content = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShowPlayer = (url) => {
    setVideoUrl(url);
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setVideoUrl('');
    setShowPlayer(false);
  };

  const handleShowShort = (url) => {
    setShortUrl(url);
    setShowPlayer(true);
  };

  return (
    <div className='backgroundContent'>
      <div className='master-container'>
        <div className='title'>
        </div>
        <div className='content-wrapper'>
          {showPlayer && (
            <div className='video-overlay'>
              <div className='videoBox'>
                <div className='videos'>
                  <div className='vid'>
                    <ReactPlayer
                      controls={true}
                      width={1064}
                      height={578}
                      url={videoUrl || shortUrl} // Use either the episode URL or short URL
                    />
                  </div>
                </div>
                <button className='close-player-button' onClick={handleClosePlayer}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className='show-player-button' onClick={() => handleShowPlayer('https://www.youtube.com/watch?v=UvR6xQEFiRc&list=PL-Npz99iNqSZt-kygUEq2zKET6Z0HblK6')}>
        Episodes
      </button>
      <button className='show-short-button' onClick={() => handleShowShort('https://www.youtube.com/shorts/8W6nX--4wNM')}>
        Shorts
      </button>
      <BackButton />
    </div>
  );
};

export default Content;
