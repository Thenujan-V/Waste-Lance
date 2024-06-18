import axios from "axios";

const BASE_API_URL = `http://localhost:4000/api`

export const setSchedule = (data) => {
    try{
        const response = axios.post(`${BASE_API_URL}/supplier/pickup`, data)
        return response
    }
    catch(error){
          throw error  
    }
}