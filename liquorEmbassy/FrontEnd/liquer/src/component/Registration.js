import React, { useState } from 'react';
import '../css/Registration.css'; // Import your CSS file for styling
import RegisterService from '../service/RegisterService';
import MyImage from '../images/logo.jpeg';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [license, setLicense] = useState('');
  const [userType, setUserType] = useState('customer'); // Default user type
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 


  const [aadharError, setAadharError] = useState(false);

  function handleAadharChange(value) {
    setAadhar(value);
    if (value.length === 12 && !isNaN(value)) {
      setAadharError(false);
    } else {
      setAadharError(true);
    }
  }


  const [licenseError, setLicenseError] = useState(false);

  function handleLicenseChange(value) {
    setLicense(value);
    if (value.length === 12 && !isNaN(value)) {
      setLicenseError(false);
    } else {
      setLicenseError(true);
    }
  }

 
  const [mobileError, setMobileError] = useState(false);

  function handleMobileChange(value) {
    setMobile(value);
    if (value.length === 10 && !isNaN(value)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }
  }

  const calculateAge=(dateString)=> {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    // Validate fields based on userType
    if (!username) newErrors.username = 'Username is required.';
    if (!password) newErrors.password = 'Password is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!dob) newErrors.dob = 'Date of Birth is required.';
    if (!mobile) newErrors.mobile = 'Mobile Number is required.';
    if (!address) newErrors.address = 'Address is required.';
    if (!pincode) newErrors.pincode = 'Pincode is required.';
    if (!aadhar) newErrors.aadhar = 'Aadhar Card Number is required.';
    if (!license) newErrors.license = 'License Number is required.';

    

    if (Object.keys(newErrors).length === 0) {
      const data = {
        user_type: userType,
        username: username,
        password: password,
        email: email,
        dob: dob,
        mob_number: mobile,
        address: address,
        pincode: pincode,
        adhaar_card_number: aadhar,
        license_number: license,
      };
      RegisterService.registerUser(data)
        .then((Response) => {
          alert('Registered Successfully');
          navigate('/');
        })
        .catch((e) => {
          alert('Already Registered user or invalid data');
          console.log(e)
          setUsername('');
          setPassword('');
          setEmail('');
          setDOB('');
          setMobile('');
          setAddress('');
          setPincode('');
          setAadhar('');
          setLicense('');
          navigate('/Registration');
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <img src={MyImage} alt="Description of the image" style={{ width: '100px', height: 'auto' }} />
        <h1 className="registration-title">Register for Liqueur Embassy</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span className="error">{errors.username}</span>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <div>
            <label htmlFor="dob">Date of Birth</label>
      <input
        type="date"
        id="dateOfBirth"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />

      {dob && calculateAge(dob) < 21 && (
        <p className="age-warning">You must be at least 21 years old.</p>
      )}
    </div>
            {errors.dob && <span className="error">{errors.dob}</span>}
            <div>
      <input
        type="number"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => handleMobileChange(e.target.value)}
      />

      {mobileError && (
        <p className="validation-error">Mobile number must be 10 digits.</p>
      )}
    </div>
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span className="error">{errors.address}</span>}
            <input
              type="number"
              value={pincode}
              placeholder="Pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
            <div>
      <input
        type="number"
        placeholder="Aadhar Card Number"
        value={aadhar}
        onChange={(e) => handleAadharChange(e.target.value)}
      />

      {aadharError && (
        <p className="validation-error">Aadhar card number must be 12 digits.</p>
      )}
    </div>
            {errors.aadhar && <span className="error">{errors.aadhar}</span>}
            <div>
      <input
        type="number"
        placeholder="License Number"
        value={license}
        onChange={(e) => handleLicenseChange(e.target.value)}
      />

      {licenseError && (
        <p className="validation-error">License number must be 12 digits.</p>
      )}
    </div>
            {errors.license && <span className="error">{errors.license}</span>}
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
            </div>
          </div>
          <button className="registration-button" type="submit">Register</button>
          <button className="registration-button-black" onClick={() => navigate('/')}>
        Go Back
      </button>
        </form>
      </div>
      
    </div>
  );
};

export default Registration;
