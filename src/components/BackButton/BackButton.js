import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';
import './BackButton.css'; // Create a CSS file for styling

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('*'); // Navigate to the Home component
  };

  return (
    <button className="back-button" onClick={handleGoBack}>
        <ArrowIcon />
        Back</button>
  );
};

export default BackButton;

