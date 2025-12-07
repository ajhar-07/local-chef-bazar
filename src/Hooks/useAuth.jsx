import React from 'react';
import AuthContext from '../Provider/AuthContext';
import { use } from 'react';

const useAuth = () => {
    const authInfo=use(AuthContext)
    return authInfo
    
};

export default useAuth;