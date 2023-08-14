import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ ingredients, totalPrice }) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {Object.keys(ingredients).map((ingredientKey) => (
          <li key={ingredientKey}>
            {ingredientKey.charAt(0).toUpperCase() + ingredientKey.slice(1)}: {ingredients[ingredientKey]}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button>Place Order</button>
    </div>
  );
};

export default OrderSummary;
