import { createContext, useState, useEffect } from "react";
import logoHTMLBanner from "../img/logoHTMLBanner.svg";
import logoCSSBanner from "../img/logoCSSBanner.svg";
import logoJSBanner from "../img/logoJSBanner.svg";
import logoReactBanner from "../img/logoReactBanner.svg";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
// Constante qui permet de créer un état pour les modales. Par défaut, l'état des deux modales
// est sur false, ce qui signifie qu'elle ne sont pas affichées
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

// Constante qui permet de basculer les modales via le paramètre modal
  const toggleModals = (modal) => {
// Si le paramètre modal de toggleModals est signIn, on passe l'état de la modale signInModal à true
    if (modal === "signIn") {
      setModalState({
        signInModal: true,
        signUpModal: false,
      });
    }
// Si le paramètre modal de toggleModals est signUp, on passe l'état de la modale signUpModal à true
    if (modal === "signUp") {
      setModalState({
        signInModal: false,
        signUpModal: true,
      });
    }
// Si le paramètre modal de toggleModals est close, on repasse l'état des deux modales à false
    if (modal === "close") {
      setModalState({
        signInModal: false,
        signUpModal: false,
      });
    }
  };

  // Constante qui permet de stocker dans signUp, 2 paramètres : email et password
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

// Constante qui permet de stocker dans signIn, 2 paramètres : email et password
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Constante qui permet de créer un état pour les utilisateurs
  const [currentUser, setCurrentUser] = useState();

// Constante je sais pas ce que c'est désolé :'(
  const [loadingData, setLoadingData] = useState(true);

// Permet de faire quelque chose que je ne comprend pas :'(
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => 
    {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

// Constante qui permet de créer un tableau avec des informations selon les 4 catégories.
  const CategorieTable = [
    {
      class: "HTMLButtonColor",
      categorieQuiz: "HTML",
      img: logoHTMLBanner,
      span: "BannerColorWhite",
      categorie: "Categories"
    },
    {
      class: "CSSButtonColor",
      categorieQuiz: "CSS",
      img: logoCSSBanner,
      span: "BannerColorWhite",
      categorie: "Categories"
    },
    {
      class: "JSButtonColor",
      categorieQuiz: "JavaScript",
      img: logoJSBanner,
      span: "BannerColorBlack",
      categorie: "Categories"
    },
    {
      class: "ReactButtonColor",
      categorieQuiz: "React",
      img: logoReactBanner,
      span: "BannerColorBlack",
      categorie: "Categories"
    },
  ];

  return (
// Permet de fournir via .Provider le hook decréation d'un Context, useContext()
// que l'on a nommé UserContext
    <UserContext.Provider
// Permet de fournir grâce au contexte les constantes suivantes créer dans 
      value={{
        modalState,
        toggleModals,
        signUp,
        signIn,
        currentUser,
        CategorieTable
      }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
