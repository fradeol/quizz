import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Inscription() 
{
// Constante qui permet d'utiliser les fonctions stockées dans le context UserContext
  const { modalState, toggleModals, signUp } = useContext(UserContext);

// Constante qui permet d'afficher un état au message d'erreur des validations du formulaire
  const [validation, setValidation] = useState("");

// Constante qui permet de stocker le hook useNavigate de react
  const navigate = useNavigate();

// Constante qui permet de changer l'état du message d'erreur des validations du formulaire,
// afin de nettoyer le message pour le remettre à 0 lors de la fermutre des deux modales
  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

// Constantes qui permettent de faire une référence aux différents inputs et au formulaire
  const signUpEmail = useRef();
  const signUpPassword = useRef();
  const signUpRepeatPassword = useRef();
  const formRef = useRef();

// Constante asynchrone qui permet de gérer le formulaire
  const handleForm = async (element) => {
// Permet de prévenir le rafraîchissement par défaut du navigateur lors de la soumission
// du formulaire
    element.preventDefault();

// Les Validations :
// Validation qui vérifie si la longueur de la valeur récupérée dans l'input Password ou L'input
// Repeat Password est bien de minimum de 8 caractères
    if ( (signUpPassword.current.value.length || signUpRepeatPassword.current.value.length) < 8) {
      setValidation(" 8 caractères minimum");
      return;
    } 
// Validation qui vérifie ensuite si la valeur de l'input Password et de l'input Repeat Password 
// correspondent
    else if (signUpPassword.current.value !== signUpRepeatPassword.current.value) {
      setValidation("les mots de passe ne correspondent pas")
      return;
    }

// Permet de tenter d'excuter la soumission du formulaire
    try 
    {
// On attend une réponse de firebase (signUp, qui est une méthode password/email)
      await signUp
        (
          signUpEmail.current.value,
          signUpPassword.current.value
        );
        formRef.current.reset();
        setValidation("")
        toggleModals("close")
        navigate("/Private/Home")
    } 
// En cas d"erreur de l'execution :
    catch (error) {
// Si firebase nous renvoie le message d'erreur "auth/invali-email", on modifie l'état du
// message de validation
        if (error.code === "auth/invali-email"){
          setValidation("Le format d'e-mail est incorrect")
        }
// Si firebase nous renvoie le message d'erreur "auth/email-already-in-use", on modifie l'état
// du message de validation
        else if (error.code === "auth/email-already-in-use"){
          setValidation("L'e-mail est déjà utilisé")
        }
      }
    }


// Permet d'afficher la modale inscription si l'état de la modale signUp est sur true.
  return (
    <>
      {modalState.signUpModal && (
        <div>
          <div 
// Overlay correspond au fond gris lors de l'apparition de la modale
          className="overlay"
// Au clic sur l'overlay, on fait appel à la fonction closeModal qui efface l'état du message
// de validation et qui change l'état de la modale signUp à false
          onClick={closeModal}></div>
          <div className="conteneurModal" id="subscribe">
            <div className="centre">
{/* Au clic sur le bouton avec l'icone croix, on fait appel à la fonction closeModal 
qui efface l'état du message de validation et qui change l'état de la modale signUp à false */}
              <button className="close" onClick={closeModal}>
                {" "}
                <RxCross1 />
              </button>
            </div>
{/* On fait une référence au formulaire que l'on stock dans formRef et on donne une action 
à la soumission pour qu'il execute la fonction handleForm qui permet de vérifier les valeurs 
des champs de saisie et les envoyer sur la base de donnée */}
            <form ref={formRef} onSubmit={handleForm}>
              <fieldset>
                <legend>Inscription</legend>
                <input
// On fait une référence de l'input qu'on stock dans la constante signUpEmail
                  ref={signUpEmail}               
                  type={"email"}
                  placeholder="adresse@mail.fr"
                  name="email"
                  id="signUpEmail"
                  required
                />
                <input
// On fait une référence de l'input qu'on stock dans la constante signUpPassword                
                  ref={signUpPassword}               
                  type={"password"}
                  placeholder="mot de passe"
                  name="password"
                  id="password"
                  required
                />

                <input
// On fait une référence de l'input qu'on stock dans la constante signUpRepeatPassword                
                  ref={signUpRepeatPassword}               
                  type={"password"}
                  placeholder="repeter mot de passe"
                  name="repeatPassword"
                  id="repeatPassword"
                  required
                />
{/* On donne au texte du message d'erreur un état que l'on peut changer en fonction 
des différentes erreurs de saisie possible */}
                <p className="red">{validation}</p>
                
                <button id="validation" type="submit">S'inscrire</button>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
