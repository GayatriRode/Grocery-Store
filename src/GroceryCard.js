import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';
import './App.css';

const GroceryCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  const { id, name, price, image } = item;

  return (
    <div className='container-fluid'>
      <div className="card">
      <img src={image} alt={name} className="card-img-top" height={250} width={250}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">₹{price.toFixed(2)}</p><br />
        <div className='d-flex justify-content-center'>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default GroceryCard;
