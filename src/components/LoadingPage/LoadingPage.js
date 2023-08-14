import React from 'react';
import './LoadingPage.css';
import Logo from './BHBLogo.jpg';

const LoadingPage = () => {
  return (
    <div className="loading">
      <div>
        <img src={Logo} alt='We Burg' className='logoImage'/>
      </div>
    </div>
  );
};

export default LoadingPage;
