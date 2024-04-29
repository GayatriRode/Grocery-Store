import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GroceryCard from './GroceryCard';
import CartItem from './CartItem'; 
import { addItem } from './cartSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [showTotal, setShowTotal] = useState(false);

  // Your grocery items data
  const groceryItems = [
    {
      "id": 1,
      "name": "Basmati Rice",
      "price": 42,
      "Weight": "1000g",
      "image": "https://m.media-amazon.com/images/I/61Aw0N9y7jL._AC_UL480_FMwebp_QL65_.jpg"
      }, {
        "id": 2,
        "name": "Toor Dal",
        "price": 45,
        "Weight": "1000g",
        "image": "https://m.media-amazon.com/images/I/61d+WbpFCiL._AC_UL480_FMwebp_QL65_.jpg"
      }, {
        "id": 3,
        "name": "Ashirvaad Atta",
        "price": 150,
        "image": "https://m.media-amazon.com/images/I/51gYblO2xWL._AC_UL480_FMwebp_QL65_.jpg"
      }, {
          "id": 4,
          "name": "Tata Salt",
          "price": 40,
          "Weight": "250g",
          "image": "https://m.media-amazon.com/images/I/61pPVRyfmgL._AC_UL480_FMwebp_QL65_.jpg"
        }, {
          "id": 5,
          "name": "Tea Powder",
          "price": 500,
          "Weight": "500g",
          "image": "https://m.media-amazon.com/images/I/51UmtgX-nWL._AC_UL480_FMwebp_QL65_.jpg"
        }, {
          "id": 6,
          "name": "Peanuts",
          "price": 60,
          "Weight": "500g",
          "image": "https://tse3.mm.bing.net/th?id=OIP.XMMYgATK_PSA9ubPDCg85gHaEK&pid=Api&P=0&h=220"
        },
        {
          "id": 7,
          "name": "Poha",
          "price": 25,
          "Weight": "500g",
          "image": "https://tse1.mm.bing.net/th?id=OIP.U1K3u8Z0cD8Y1CnqPijJhgHaHa&pid=Api&P=0&h=220"
        },
        {
          "id": 8,
          "name": "Garam Masala",
          "price": 95,
          "Weight": "200g",
          "image": "https://m.media-amazon.com/images/I/61MyqJ4PkEL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
          "id": 9,
          "name": "Mustard Seeds",
          "price": 100,
          "Weight": "250g",
          "image": "https://tse2.mm.bing.net/th?id=OIP.U2eO70Xb0nSc7lfR0-PE5QHaE8&pid=Api&P=0&h=220"
        },
        {
          "id": 10,
          "name": "Gemini Refined Sunflower Oil",
          "price": 150,
          "Weight": "250g",
          "image": "https://tse4.mm.bing.net/th?id=OIP.2a_go4E-RdHkTCDSR2ni8QHaHa&pid=Api&P=0&h=220"
        },
        {
          "id": 11,
          "name": "MDH Lal Mirch Powder",
          "price": 150,
          "Weight": "250g",
          "image": "https://www.jiomart.com/images/product/600x600/490070025/mdh-lal-mirch-powder-500-g-product-images-o490070025-p490070025-0-202205172214.jpg"
        },
        {
          "id": 12,
          "name": "Suhana Haldi",
          "price": 150,
          "Weight": "250g",
          "image": "https://tse3.mm.bing.net/th?id=OIP.PDHWtk0CGKI-dNP88kGc_wHaHa&pid=Api&P=0&h=220"
        },
        {
          "id": 13,
          "name": "Lays Tomato Flavor",
          "price": 10,
          "Weight": "20g",
          "image": "https://tse4.mm.bing.net/th?id=OIP.EdCbduaQjyySL_vj01ruiwAAAA&pid=Api&P=0&h=220"
        },
        {
          "id": 14,
          "name": "Bingo Tedhe Medhe Masala Flavor",
          "price": 10,
          "Weight": "20g",
          "image": "https://tse3.mm.bing.net/th?id=OIP.bl26vrEbO_5rqG7PFHl40wHaFi&pid=Api&P=0&h=220"
        },
        {
          "id": 15,
          "name": "Parle G Biscuit",
          "price": 25,
          "Weight": "56g",
          "image": "https://tse4.mm.bing.net/th?id=OIP.CuFgaY02nbTnFDFcRWKjJQHaHa&pid=Api&P=0&h=220"
        }
      ];

  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); 
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="container">
      <h2>Apna Bazaar</h2>
      <div className="item-list">
        <div className="card-container">
          {groceryItems.map(item => (
            <GroceryCard key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className="cart">
        <h1>Cart</h1>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className='d-flex justify-content-center'>
        <button className='btn-success' onClick={() => setShowTotal(true)}>
          Show Total
        </button>
        </div>
        <br />
        {showTotal && (
          <div className="total-amount pt-4">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
