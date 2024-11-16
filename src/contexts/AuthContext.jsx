import {
  applyActionCode,
  checkActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-setup.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    const close = onAuthStateChanged(auth, (current) => {
      if (current) {
        setUser(current);
        setCurrentUser(current);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      close();
    };
  }, []);
  //create account with emailPassword
  const createWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sendVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const profileUpdate = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };

  const oobCodeCheck = (oobCode) => {
    return checkActionCode(auth, oobCode);
  };
  const confrimEmailVerification = (oobCode) => {
    return applyActionCode(auth, oobCode);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const setNewPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const logout = () => {
    return signOut(auth);
  };
  console.log(currentUser);
  // setCurrentUser(user);

  return (
    <AuthContext.Provider
      value={{
        createWithEmailPassword,
        user,
        sendVerificationEmail,
        logout,
        loading,
        profileUpdate,
        oobCodeCheck,
        confrimEmailVerification,
        resetPassword,
        setNewPassword,
        loginUser,
        googleLogin,
        facebookLogin,
        auth,
        setUser,
        setCurrentUser,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
