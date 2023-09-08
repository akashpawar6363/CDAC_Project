import React, { useState, useEffect } from 'react';
import DeliveryPerson from './DeliveryPerson'; 
import DeliveryService from '../service/DeliveryService';
import {useLocation} from 'react-router-dom';
const GetDelivery = () => {
  const [jsonData, setJsonData] = useState([]);
  const location = useLocation();
  const userName = location.state;
console.log(userName);
 useEffect(() => {
    DeliveryService.getAllDelivery()
      .then((response) => {
        setJsonData(response.data); 
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, []); 
  return (
    <div>
      <h1><center>Delivery Dashboard</center></h1>   
      
      {jsonData.length > 0 ? <DeliveryPerson jsonData={jsonData} user={userName}/> : <p><center>No Orders</center></p>}
    </div>
  );
};

export default GetDelivery;
