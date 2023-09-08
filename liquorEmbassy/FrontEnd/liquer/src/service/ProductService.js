import axios from "axios";

const baseUrl="http://localhost:8080/";
class ProductService{
    takeAll(){
        return axios.post(baseUrl+"getAll");
    }
    submitOrder(order)
    {
        return axios.post(baseUrl+"submitOrder",order)
    }

}

export default new ProductService();
