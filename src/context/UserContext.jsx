import { createContext, useState, 
  // useEffect
 } from "react";

import {
  // signInWidthEmailAndPassword,
  createUserWithEmailAndPassword,
  // onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase-config"

export const UserContext = createContext();

export function UserContextProvider(props) {

  // const [currentUser, setCurrentUser] = useState();
  // const [loadingData, setLoadingData] = useState(true)
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);


  

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signInModal: true,
        signUpModal: false,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signInModal: false,
        signUpModal: true,
      });
    }
    if (modal === "close") {
        setModalState({
          signInModal: false,
          signUpModal: false,
        });
      }
  };
  
  return (
    <UserContext.Provider value={{modalState, toggleModals, signUp}}>
        {props.children}
    </UserContext.Provider>
  )


}
