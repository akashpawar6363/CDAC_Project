import './App.css';
import Login from './component/Login.js';
import { Routes, Route} from 'react-router-dom';
import Registration from './component/Registration';
import Cart from './component/Cart.js';
import ProductGrid from './component/ProductGrid';
import Payment from './component/Payment';
import InternetBanking from './component/InternetBanking';
import MyOrders from './component/MyOrders';
import GetDelivery from './component/GetDelivery';
import { ShopOwner } from './component/ShopOwner';
import HomePage from './component/Home.js';
import FollowUs from './component/followUs.js';
import Support from './component/support.js';
import ContactUS from './component/contactUs.js';
import Feedback from './component/feedback.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<HomePage></HomePage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/Registration" element={<Registration></Registration>} />
            <Route path="/MainPage" element={<ProductGrid/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment" element={<Payment></Payment>}/>
            <Route path="/internet-banking" element={<InternetBanking></InternetBanking>}/>
            <Route path='/myorders' element={<MyOrders></MyOrders>}></Route>
            <Route path='/DeliveryPerson' element={<GetDelivery></GetDelivery>}></Route>
            <Route path='/ShopOwner' element={<ShopOwner></ShopOwner>}></Route>
            <Route path="/followUs" element={<FollowUs/>}/>
            <Route path='/support' element={<Support/>}></Route>
            <Route path='/feedBack' element={<Feedback/>}></Route>
            <Route path='/contactUs' element={<ContactUS/>}></Route>
            
    
    </Routes>
    </div>
  );
}

export default App;
