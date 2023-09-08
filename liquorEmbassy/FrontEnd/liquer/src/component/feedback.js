import React from 'react';

const FeedbackPage = () => {
  return (
    <div>
      <h1>Feedback</h1>
      <p>We value your feedback and suggestions to improve our services. Your insights help us provide a better experience for all our customers.</p>
      <p>Please use the form below to share your feedback:</p>
      
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      <p>Your feedback is valuable to us and will help us serve you better. Thank you for taking the time to provide your thoughts!</p>
    </div>
  );
};

export default FeedbackPage;
