import '../css/InternetBanking.css'
import GooglePayButton from "@google-pay/button-react";
import React from "react";
import {useLocation,useNavigate,Link} from 'react-router-dom';
import {useState} from 'react';
import ProductService from '../service/ProductService';

function InternetBanking() {
  const navigate = useNavigate();
  const location = useLocation();
  const CartData=location.state;
  const handlePayment=()=>{
    
    ProductService.submitOrder(CartData)
    .then((r)=>{console.log("cart added")})
    .catch((e)=>{alert("problem while confirming cart");})
    localStorage.clear();
    navigate('/MainPage', { state: CartData.userId });
  
  }
  return (<>
                <div className="top-right">
              <Link className="nav-link logout-button" to="/">
                Logout
              </Link>
              </div>
            
    <div className="cash-on-delivery-button-container">
      <button className="cash-on-delivery-button" onClick={handlePayment} >
        CASH ON DELIVERY
      </button>
    </div>

    <div className="Int1">
      <GooglePayButton
       className="google-pay-button"
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type:"CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "",
            merchantName: "Akash3",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: CartData.total.toString(),
            currencyCode: "INR",
            countryCode: "IN",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={paymentData =>{
          console.log('paymentData' + paymentData);
          CartData.payment="Online";
          localStorage.clear();
          ProductService.submitOrder(CartData)
          .then((r)=>{console.log("cart added")})
          .catch((e)=>{alert("problem while confirming cart");})
          return { transactionState: 'SUCCESS'}
        }}
        existingPaymentMethodRequired='false'
        buttonColor="black"
        buttonType="order"
      ></GooglePayButton>
    </div></>
  );
}

export default InternetBanking;