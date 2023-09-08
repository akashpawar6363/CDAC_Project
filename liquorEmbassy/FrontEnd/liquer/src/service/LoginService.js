import axios from "axios";

const baseUrl="http://localhost:8080/";
class LoginService{
    LoginUser(reg){
        return axios.post(baseUrl+"Login",reg);
    }
}

export default new LoginService();
