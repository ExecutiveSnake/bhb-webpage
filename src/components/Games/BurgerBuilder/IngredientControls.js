import React from 'react';
import './IngredientControls.css';

const IngredientControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const ingredientTypes = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Patty', type: 'patty' },
    { label: 'Tomato', type: 'tomato' },
  ];

  return (
    <div className="ingredient-controls">
      {ingredientTypes.map(({ label, type }) => (
        <div key={type}>
          <button onClick={() => addIngredient(type)}>Add {label}</button>
          <button onClick={() => removeIngredient(type)} disabled={ingredients[type] <= 0}>
            Remove {label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default IngredientControls;
