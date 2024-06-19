import axios from "axios";

const BASE_API_URL = `http://localhost:4000/api`

export const showSchedule = () => {
    try{
        const response = axios.get(`${BASE_API_URL}/mrf/pickups`)
        return response
    }
    catch(error){
          throw error  
    }
}