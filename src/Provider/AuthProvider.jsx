import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  
  const signOutuser = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  const ResetPassword = (email) => sendPasswordResetEmail(auth, email);

  
  const updateUser = (updatedData) =>
    updateProfile(auth.currentUser, updatedData);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    loginwithGoogle,
    signOutuser,
    ResetPassword,
    updateUser,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
