// import React, { useEffect, useState } from 'react';
import BackButton from '../BackButton/BackButton';
import Adoption from './Adoption';
import './Collection.css';

const Collection = () => {
  return (
    <div className='backgroundAdoption'>
      <div>
        <h1 className='titleAdoption'>Adopt a Billionaire</h1>
        <Adoption />
        <BackButton />
      </div>
    </div>
  );
};

export default Collection;