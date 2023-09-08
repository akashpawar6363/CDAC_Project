import axios from "axios";

const baseUrl="http://localhost:8080/getmyorder";
class MyOrders{
    getMyOrder(id)
    {
      return axios.get(`${baseUrl}/${id}`);
    }
}

export default new MyOrders();
