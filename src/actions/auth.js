import { googleAuthProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

const auth = getAuth();

export const startLogin = () => {
  return () => {
      return signInWithPopup(auth, googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
      return signOut(auth);
  };
};
