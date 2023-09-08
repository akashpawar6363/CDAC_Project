import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Make sure to import Route from the correct source

const SupportPage = () => {
  return (
    <div>
      <h1>Customer Support</h1>
      <p>If you need assistance or have any issues, our customer support team is here to help:</p>
      <ul>
        <li>Email: support@liquorembassy.com</li>
        <li>Phone: +123-456-7890</li>
        <li>Live Chat: Available on our website during business hours</li>
      </ul>
      <p>Our dedicated support team is available to provide you with the best assistance and solutions.</p>
    </div>
  );
};

export default SupportPage;
