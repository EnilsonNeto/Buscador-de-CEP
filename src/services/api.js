import axios from "axios";


// 55038190/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;