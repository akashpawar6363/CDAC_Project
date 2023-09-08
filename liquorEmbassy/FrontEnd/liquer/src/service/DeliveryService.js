import axios from 'axios';
const baseUrl="http://localhost:8080/delivery";
class DeliveryService 
{
    getAllDelivery()
    {
        return axios.get(baseUrl);
    }
    removeRow(id)
    {
        return axios.delete(baseUrl+'/{'+id+'}');
    }
    fixPesron(user,orderId)
    { console.log(user,orderId);
       return axios.put(`${baseUrl}/fixPerson/${user}/${orderId}`);
    }
    
}
export default new DeliveryService();