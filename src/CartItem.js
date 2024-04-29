import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from './cartSlice'; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity, image } = item;

  const handleRemove = () => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  }
  
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className='main-content'>
      <div className="cart-item">
      <img src={image} alt={name} className="cart-item-img" />
      <div>
        <h3>{name}</h3>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
        <div className='btns d-flex justify-content-center'>
          <button className='btn-primary' onClick={handleIncrement}>+</button>
          <button className='btn-primary' onClick={handleDecrement}>-</button>
        </div><br />
        <button className='btn-danger' onClick={handleRemove}>Remove</button>
      </div><br />
    </div>
    </div>
    
  );
};

export default CartItem;
