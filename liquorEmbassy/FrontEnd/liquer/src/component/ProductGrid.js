import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductService from '../service/ProductService';
import logo from '../images/logo.jpg';
import '../css/AlcoholShop.css';
import whiskeyImage from '../images/Whiskey.png';
import wineImage from '../images/RedWine.png';
import Badwiser from '../images/Badwiser.png';
import Bira from '../images/Bira.png';
import Carlsberg from '../images/Carlsberg.png';
import Corona from '../images/Corona.png';
import Fosters from '../images/Fosters.png';
import Heineken from '../images/Heineken.png';
import Kingfisher from '../images/Kingfisher.png';
import Miller from '../images/Miller.png';
import Simba from '../images/Simba.png';
import Tuborg from '../images/Tuborg.png';
import Belowvodka from '../images/42BelowVodka.png';
import Ardbeg from '../images/abgob.png';
import Absolute from '../images/AbsuluteVodka.png'; 
import antiquity from '../images/antiquity.png';
import bacardi from '../images/BacardiWhite.png';
import Bagpiper from '../images/Bagpiper.png';
import BacardiBlack from '../images/BakardiBlack.png';
import Belvedere from '../images/BelvedereVodka.png';
import sula from '../images/cheninblanc.png';
import ciroc from '../images/CirocVodka.png';
import finlandia from '../images/FinlandiaVodka.png';
import Grey from '../images/GreyVodka.png';
import Ketel from '../images/KetelVodka.png';
import mac from '../images/macdoll.png';
import magic from '../images/Magicmoment.png';
import vat from '../images/OIP.png';
import rua from '../images/Rua.png';
import Sau from '../images/sauvignonblanc.png';
import Signature from '../images/Signature.png';
import Sky from '../images/SkyVodka.png';



const AlcoholShop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const userName = location.state;
  const [user, setUser] = useState(userName);

  useEffect(() => {
    ProductService.takeAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("error occurred" + error);
      });

    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCart([...cart, updatedProduct]);
      saveCartToLocalStorage([...cart, updatedProduct]);
    }
  };

  const getImageForProduct = (imageName) => {
    switch (imageName) {
      case 'Whiskey.png':
        return whiskeyImage;
      case 'RedWine.png':
        return wineImage;
      case 'BadWiser.png':
        return Badwiser;
      case 'Bira.png':
        return Bira;
      case 'Carlsberg.png':
        return Carlsberg;
      case 'Corona.png':
        return Corona;
      case 'Fosters.png':
        return Fosters;
      case 'Heineken.png':
        return Heineken;
      case 'Kingfisher.png':
        return Kingfisher;
      case 'Miller.png':
        return Miller;
      case 'Simba.png':
        return Simba;
      case 'Tuborg.png':
        return Tuborg;
      case '42BelowVodka.png':
        return Belowvodka;
      case 'abgob.png':
        return Ardbeg;
      case 'AbsuluteVodka.png':
        return Absolute;
      case 'antiquity.png':
        return antiquity;
      case 'BacardiWhite.png':
        return bacardi;
      case 'Bagpiper.png':
        return Bagpiper;
      case 'BakardiBlack.png':
        return BacardiBlack;
      case 'BelvedereVodka.png':
        return Belvedere;
      case 'chenonblanc.png':
        return sula;
      case 'CirocVodka.png':
        return ciroc;
      case 'FinlandiaVodka.png':
        return finlandia;
      case 'GreyVodka.png':
        return Grey;
      case 'KetelVodka.png':
        return Ketel;
      case 'macdoll.png':
        return mac;
      case 'Magicmoment.png':
        return magic;
      case 'OIP.png':
        return vat;
      case 'Rua.png':
        return rua;
      case 'sauvignonblanc.png':
        return Sau;
      case 'Signature.png':
        return Signature;
      case 'SkyVodka.png':
        return Sky;
    
      default:
        return null;
    } };

  const serializedData = encodeURIComponent(JSON.stringify(cart));

  return (
    <>
      {user != null ? (
        <div className="alcohol-shop">
          <header className="header">
            <img src={logo} className="additional-image" alt="logo" />
            <h1 className="welcome-message">Welcome to the Liquor Embassy</h1>
            <nav className="top-nav">
              <Link className="nav-link" to={`/cart?data=${serializedData}&user=${user}`}>
                <button className="nav-button cart-button">Go to Cart</button>
              </Link>
              <Link className="nav-link" to={`/myorders?user=${user}`}>
                <button className="nav-button order-button">My Orders</button>
              </Link>
              <Link className="nav-link logout-button" to="/">
                Logout
              </Link>
            </nav>
          </header>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={getImageForProduct(product.image)} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Rs. {product.price} All Inclusive</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Login first</h1>
      )}
    </>
  );
};

export default AlcoholShop;
