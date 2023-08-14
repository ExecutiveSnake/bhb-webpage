import React from 'react';
import './Burger.css';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((ingredientKey) => {
    return [...Array(ingredients[ingredientKey])].map((_, index) => (
      <div key={ingredientKey + index} className={`ingredient ${ingredientKey}`} />
    ));
  });

  const flattenedIngredients = transformedIngredients.reduce((arr, el) => arr.concat(el), []);

  return (
    <div className="burger">
      <div className="bun top"></div>
      {flattenedIngredients.length === 0 ? <p>Please start adding ingredients!</p> : flattenedIngredients}
      <div className="bun bottom"></div>
    </div>
  );
};

export default Burger;
