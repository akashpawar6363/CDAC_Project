import axios from "axios";

const baseUrl="http://localhost:8080/";
class Registration{
    registerUser(reg){
        return axios.post(baseUrl+"registerUser",reg);
    }
}

export default new Registration();
