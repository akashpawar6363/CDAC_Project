import React ,{useState,useEffect} from "react";
import ShopOwnerService from '../service/ShopOwnerService'
import { Link ,useLocation} from "react-router-dom";
export function ShopOwner()
{  
    const [Orders, setOrders] = useState([]); 
    const [headers,setHeaders]=useState([]);
    const location = useLocation();
  const userName = location.state;
  const [user, setuser] = useState(userName);
console.log(userName);
 useEffect(() => {
    
    ShopOwnerService.getAllOrders()
    .then((response)=>{
        console.log(response.data);
    setOrders(response.data);
         setHeaders(Object.keys(response.data[0])); 
    })
    .catch((error)=>{console.log("error occured"+error)});
}, []);  
  
const handleRowClick =((rowIndex,id)=>
  { console.log(id);
    ShopOwnerService.removeRecords(id)
    .then(()=>{alert("order send to delivery person");
     window.location.reload();
  })
    .catch((e)=>{alert("please try again ");console.log(e)})
  });


return(<><div className="top-right">
<Link to="/" className="logout-button">
  Logout
</Link>
</div>{user!=null?
   <div>
    <h1><center>Orders</center></h1>
    {Orders.length > 0 ? ( <div className="dashboard-container">
    
  <div className="dashboard-content">
    <div className="json-table-container">
      <table className="json-table">
        <thead>
        <tr>
        <th key={1}>{"orderId"}</th>
        <th key={2}>{"Order"}</th>
        <th key={3}>{"bill amount"}</th>
        <th key={4}>{"Buyer Name"}</th>
        <th key={5}>{"Payment Mode"}</th>
        
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
            <td key={4}>{row["userId"]}</td>
            <td key={5}>{row["payment"]}</td> 
            <td key={6}><button onClick={() => handleRowClick(rowIndex,row.orderId)}>complete</button></td>
            </tr>


          ))}
        </tbody>
      </table></div></div></div>): <p><center>No Orders</center></p>}
    </div>:"Login first"}</>
);
};
