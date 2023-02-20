import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  const signUpEmail = useRef();
  const signUpPassword = useRef();
  const signUpRepeatPassword = useRef();

  const formRef = useRef();

  const handleForm = async (element) => {
    element.preventDefault();

    if ( (signUpPassword.current.value.length || signUpRepeatPassword.current.value.length) < 8) {

      setValidation(" 8 caractères minimum");
      return;
      
    } else if (signUpPassword.current.value !== signUpRepeatPassword.current.value) {

      setValidation("les mots de passe ne correspondent pas")
      return;
    }

    try {
       await signUp(
        signUpEmail.current.value,
        signUpPassword.current.value
      );
      formRef.current.reset();
      setValidation("")
      toggleModals("close")
      navigate("/Private/Home")
      
    } 
    
    catch (error) {
        // retourn catch si ça fail
        if (error.code === "auth/invali-email"){
          setValidation("Le format d'e-mail est incorrect")
        }
        else if (error.code === "auth/email-already-in-use"){
          setValidation("L'e-mail est déjà utilisé")
        }
      }
    }

  return (
    <>
      {modalState.signUpModal && (
        <div>
          <div 
          className="overlay"
          onClick={closeModal}></div>
          <div className="conteneurModal" id="subscribe">
            <div className="centre">
              <button className="close" onClick={closeModal}>
                {" "}
                <RxCross1 />
              </button>
            </div>
            <form ref={formRef} onSubmit={handleForm}>
              <fieldset>
                <legend>Inscription</legend>
                <input
                  ref={signUpEmail}               
                  type={"email"}
                  placeholder="adresse@mail.fr"
                  name="email"
                  id="signUpEmail"
                  required
                />
                <input
                  ref={signUpPassword}               
                  type={"password"}
                  placeholder="mot de passe"
                  name="password"
                  id="password"
                  required
                />

                <input
                  ref={signUpRepeatPassword}               
                  type={"password"}
                  placeholder="repeter mot de passe"
                  name="repeatPassword"
                  id="repeatPassword"
                  required
                />
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
