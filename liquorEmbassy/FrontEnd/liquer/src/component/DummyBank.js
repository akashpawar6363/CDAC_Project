const bankAPISuccessResponse = {
    success: true,
    message: 'Payment successful!',
  };
  
  const bankAPIErrorResponse = {
    success: false,
    message: 'Payment failed due to insufficient funds.',
  };
  
  const dummyBank = (bankCode) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (bankCode === 'bankA') {
          resolve(bankAPISuccessResponse);
        } else {
          reject(bankAPIErrorResponse);
        }
      }, 1500); // Simulate a delay
    });
  };
  
  export default dummyBank;
  