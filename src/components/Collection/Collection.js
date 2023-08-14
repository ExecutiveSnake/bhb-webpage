import React, { useEffect, useState } from 'react';
import BackButton from '../BackButton/BackButton';
import './Collection.css';

const Collection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        const response = await fetch('https://api-mainnet.magiceden.dev/v2/collections/bigheadbillions/listings', options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  if (!data.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='backgroundAdoption'>
      <div>
        <h1 className='titleAdoption'>Adopt a Billionaire</h1>
        <div className="grid-container">
          {data.map((item) => (
            <div key={item.tokenMint} className="grid-item">
              {item.extra && item.extra.img ? (
                <a href={`https://magiceden.io/item-details/${item.tokenMint}`} target="_blank" rel="noopener noreferrer">
                  <button className='buttonB'><img src={item.extra.img} alt="" /></button>
                </a>
              ) : (
                <p>No image available for this item.</p>
              )}
            </div>
          ))}
        </div>
        <BackButton />
      </div>
    </div>
  );
};

export default Collection;