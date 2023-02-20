import { createContext, useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

const CategorieTable = [ {class: "HTMLButtonColor", categorieQuiz: "HTML" },
                      {class: "CSSButtonColor", categorieQuiz: "CSS" },
                      {class: "JSButtonColor", categorieQuiz: "JavaScript" },
                      {class: "ReactButtonColor", categorieQuiz: "React" } ]


export function UserContextProvider(props) {
  const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });



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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp, currentUser, signIn, CategorieTable }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
