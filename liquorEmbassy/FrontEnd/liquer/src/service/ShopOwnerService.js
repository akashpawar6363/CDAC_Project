import axios from 'axios';
const baseUrl="http://localhost:8080/orders";
class ShopOwnerService
{
getAllOrders()
{
    return axios.get(baseUrl);
}
removeRecords(id)
{
    return axios.delete(`${baseUrl}/${id}`)
}
}
export default new ShopOwnerService();