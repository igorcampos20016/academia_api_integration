import axios from "axios";

const api = axios.create({
  baseURL: "h ttps://localhost:3000",
});



//! used for authentication 
// api.defaults.headers.authorization = `Bearer ${token}`;


export default api;