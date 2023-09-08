import React ,{useState,useEffect} from "react";
import ShopOwnerService from '../service/ShopOwnerService'
import { Link ,useLocation} from "react-router-dom";
import MyOrderService from "../service/MyOrderService";
export default function MyOrders()
{  
    const [Orders, setOrders] = useState([]); 
    const [headers,setHeaders]=useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  const user=searchParams.get("user");
  const [eUser,setEUser]=useState(user);
console.log(user);
 useEffect(() => {
  const intervalId = setInterval(() => {
    window.location.reload();
  }, 30000);

     MyOrderService.getMyOrder(eUser)
    .then((response)=>{
        console.log(response.data);
    setOrders(response.data);
         setHeaders(Object.keys(response.data[0])); 
    })
    .catch((error)=>{console.log("error occured"+error)});

    return () => clearInterval(intervalId);

}, []);  
 


return(<>{user!=null?
  
   <div>
    {/* <Link className="nav-link logout-button" to="/">
                Logout
              </Link> */}
              <div className="top-right">
        <Link to="/" className="logout-button">
          Logout
        </Link>
      </div>
    <h1><center>My Orders</center></h1>
    {Orders.length > 0 ? ( <div className="dashboard-container">
    
  <div className="dashboard-content">
    <div className="json-table-container">
      <table className="json-table">
        <thead>
        <tr>
        <th key={1}>{"orderId"}</th>
        <th key={2}>{"Order"}</th>
        <th key={3}>{"bill amount"}</th>
        <th key={4}>{"status"}</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((row, rowIndex) => (
            <tr
              key={rowIndex}>
            <td key={1}>{row["orderId"]}</td>
            <td key={2}>
  {row["order_Discription"]
    .split(",").map((item, index) => (
      <div key={index}>{item.trim()}</div>
    ))}
</td>

            <td key={3}>{row["bill_Amount"]}</td>
            <td key={4}>{row["status"]}</td>
            </tr>


          ))}
        </tbody>
      </table></div></div></div>): <p><center>No Orders</center></p>}
    </div>:"Login first"}</>
);
};
