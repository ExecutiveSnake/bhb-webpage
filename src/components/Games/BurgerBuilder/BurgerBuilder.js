import React, { useState } from 'react';
import Burger from './Burger';
import IngredientControls from './IngredientControls';
import OrderSummary from './OrderSummary';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    lettuce: 0,
    cheese: 0,
    patty: 0,
    tomato: 0,
  });

  const ingredientPrices = {
    lettuce: 1,
    cheese: 1.5,
    patty: 3,
    tomato: 0.5,
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const addIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] += 1;
    setIngredients(updatedIngredients);
    setTotalPrice((prevPrice) => prevPrice + ingredientPrices[type]);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) {
      return;
    }
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] -= 1;
    setIngredients(updatedIngredients);
    setTotalPrice((prevPrice) => prevPrice - ingredientPrices[type]);
  };

  return (
    <div>
      <Burger ingredients={ingredients} />
      <IngredientControls
        ingredients={ingredients}
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
      />
      <OrderSummary ingredients={ingredients} totalPrice={totalPrice} />
    </div>
  );
};

export default BurgerBuilder;
