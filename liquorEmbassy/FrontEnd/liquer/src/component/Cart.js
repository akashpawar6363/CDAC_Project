import React, { useState } from 'react';
import { useLocation, Link ,useNavigate} from 'react-router-dom';
import '../css/Cart.css'; 
import InternetBanking from './InternetBanking'; 
import '../css/InternetBanking.css'; 
import ProductService from '../service/ProductService';



const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serializedData = searchParams.get('data');
const user=searchParams.get("user");
  const cart = JSON.parse(decodeURIComponent(serializedData));
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(cart || []);


  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    setCartItems(updatedCart);
  };
  const totalCartPrice = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const  productListString = cartItems.map(product => `${product.id}-${product.quantity}`).join(', ');

  const handlePayment =()=>{
    console.log(user);
   const CartData={
    userId:user,
    total: totalCartPrice,
    products:productListString,
    payment:"cod" }
console.log(CartData);
navigate('/internet-banking', { state: CartData });

 };
  const handleRemoveProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };


  return (
    <div className="cart">
      <h2>Your Cart</h2>

      
              <div className="top-right">
              <Link className="nav-link logout-button" to="/">
                Logout
              </Link>
              </div>
            
          

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                <div className="cart-item">
                  <div className="item-details">
                    <p className="item-name">{product.name}</p>
                    <p className="item-price">Rs.{product.price} All Inclusive</p>
                    <p className="item-price">Free Delivery</p>
                    <div className="quantity-controls">
                      <button
                        className="control-button"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{product.quantity}</span>
                      <button
                        className="control-button"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Delivery Charges : Free</p>
            <p className="total-price">Total Price: Rs.{totalCartPrice.toFixed(2)} All Inclusive</p>
          <button onClick={handlePayment}>Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
