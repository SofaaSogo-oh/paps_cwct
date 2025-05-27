import axios from "axios";
import { getAuthToken } from "../helper/authStatus";

export const updateUserData = (data) => 
    axios.post('/api/user/personal_data', data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  
  export const fetchUserData = () => 
    axios.get('/api/user/personal_data', { authToken: getAuthToken() });