//save or update user 

import axios from "axios"

export const saveOrupdateUser=async(userData)=>{

    const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/users`,userData)

          return data
}