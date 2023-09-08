import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.gif';
import pic9 from '../images/pic9.jpg';
import pic10 from '../images/pic10.jpg';
import pic13 from '../images/pic13.jpg';
import pic12 from '../images/pic12.jpg';
import logo from '../images/logo.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="slider-container">
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay interval={2000} infiniteLoop>
          <div>
            <img src={pic1} className="carousel-image" alt="Slide 1" />
          </div>
          <div>
            <img src={pic2} className="carousel-image" alt="Slide 2" />
          </div>
          <div>
            <img src={pic3} className="carousel-image" alt="Slide 3" />
          </div>
          <div>
            <img src={pic4} className="carousel-image" alt="Slide 4" />
          </div>
          <div>
            <img src={pic5} className="carousel-image" alt="Slide 3" />
          </div>
          <div>
            <img src={pic6} className="carousel-image" alt="Slide 4" />
          </div>
        </Carousel>
        <div className="header-overlay">
          <header className="header">
          {<img src={logo} className="additional-image" alt="logo" /> }
            <div className="site-name">LIQUOR EMBASSY</div>
           
            <div className="nav-links"> <div className="search-bar">
             
            </div>
              <Link to="/login" className="header-link">Login</Link>
              <Link to="/Registration" className="header-link">Register</Link>
            </div>
          </header>
        </div>
      </div>



      {/* <h3 className="image-text-top">Indians all time favourite</h3> */}
      <div className="additional-images1">
      
        <div className="image-frame1">
          
          <div className="image-box1">
          
              <img src={pic13} className="additional-image1" alt="Image 11" />
              {/* <p className="image-text-bottom">Old Monk</p> */}
          </div>
          <div className="image-box1">
           
              <img src={pic12} className="additional-image1" alt="Image 12" />
              {/* <p className="image-text-bottom">Royal Stag</p> */}
          </div>
          <div className="image-box1">
            
              <img src={pic10} className="additional-image1" alt="Image 10" />
              {/* <p className="image-text-bottom">Budvisior</p> */}
          </div>
          
          <div className="image-box1">
           
              {/* <img src={pic15} className="additional-image1" alt="Image 15" /> */}
              {/* <p className="image-text-bottom">Imperial Blue</p> */}
          </div>
        </div>
        
      </div>
      
      <div className="additional-images">
        <div className="image-frame1">
          <div className="image-box1">
            <Link to="/login" className="hoverable-link">
              <img src={pic7} className="additional-image1" alt="Image 7" />
              
            </Link>
          </div>
          <div className="image-box1">
            <Link to="/login" className="hoverable-link">
              <img src={pic8} className="additional-image1" alt="Image 8" />
              
            </Link>
          </div>
          <div className="image-box1">
            <Link to="/login" className="hoverable-link">
              <img src={pic9} className="additional-image1" alt="Image 9" />
              
            </Link>
          </div>
        </div>
      </div>
     
      <div className="footer-overlay">
        <footer className="footer">
          <div className="footer-links">
            <Link to="/followUs">Follow Us</Link>
            <Link to="/contactUs">Contact Us</Link>
            <Link to="/feedBack">Feedback</Link>
            <Link to="/support">Support</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;