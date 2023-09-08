import React, { useState } from 'react';
import '../css/Login.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import MyImage from '../images/logo.jpeg';
import LoginService from '../service/LoginService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // Default user type
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
   
    LoginService.LoginUser({ username: username, password: password, user_type: userType })
      .then((Response) => {
          console.log(Response.data.length+" "+Response.data)
        if (Response.data === 'customer' && userType == 'customer') {
         
          navigate('/MainPage', { state: username });
        } else if (Response.data === 'delivery' && userType == 'delivery') {
         
          navigate('/DeliveryPerson', { state: username });
        } else if (Response.data == 'shopowner' && userType == 'shopowner') {
           
          navigate('/ShopOwner', { state: username });
        }else
          alert('Invalid Credentials');
      })
      .catch((e) => { 
        const hostName = window.location.hostname;
       window.location.href.replace(hostName, '');
        alert("Invalid Credentials")
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={MyImage} alt="Description of the image" style={{ width: '100px', height: 'auto' }} />

        <h1 className="login-title">Login to Liquor Embassy</h1>
        <div className="login-form">
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

            <input
              className="password-field"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="customer"
                checked={userType === 'customer'}
                onChange={() => setUserType('customer')}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                value="delivery"
                checked={userType === 'delivery'}
                onChange={() => setUserType('delivery')}
              />
              Delivery Person
            </label>
            <label>
              <input
                type="radio"
                value="shopowner"
                checked={userType === 'shopowner'}
                onChange={() => setUserType('shopowner')}
              />
              Shop Owner
            </label>
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <Link to="/Registration">Don't have an account? Register here.</Link>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
