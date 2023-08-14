import React from 'react';
import './NavBarTest.css';
import Logo from './BHBLogo.jpg';

const NavBarTest = ({ hoveredNavItem }) => {
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className='nav-bar' onMouseMove={handleMouseMove}>
      {hoveredNavItem ? (
        <p className='nav-bar-title'>{hoveredNavItem}</p>
      ) : (
        <img
          src={Logo}
          alt='Logo'
          className='nav-bar-logo'
          style={{
            left: cursorPosition.x - 125 + 'px', // Adjust the offset based on logo size
            top: cursorPosition.y - 125 + 'px', // Adjust the offset based on logo size
          }}
        />
      )}
    </div>
  );
};

export default NavBarTest;
