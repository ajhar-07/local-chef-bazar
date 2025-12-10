import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRole = () => {
    const{user,loading}=useAuth()
       const{data:role,isLoading:isReloading}=useQuery({
        enabled:!loading && !!user?.email,
        queryKey:['role',user?.email],
       queryFn: async () => {
  const res = await axios.get(`http://localhost:5000/user/role/${user?.email}`);
  return res.data.role?.toLowerCase();
}

       })
       return[role,isReloading]
};

export default useRole;