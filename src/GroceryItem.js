import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const GroceryItem = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="grocery-item">
      <img src={image} alt={name} /> 
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default GroceryItem;
