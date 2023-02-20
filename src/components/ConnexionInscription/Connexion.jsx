import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  const signInEmail = useRef();
  const signInPassword = useRef();

  const formRef = useRef();

  const handleForm = async (element) => {
    element.preventDefault();

    try {
       await signIn(
        signInEmail.current.value,
        signInPassword.current.value
      );
      setValidation("");
      toggleModals("close")
      navigate ("/Private/Home")
      
    } 
    
    catch (error) {
       setValidation("L'email ou le mot de passe n'est pas le bon")
        }
      }
    
    function notSubscribedYet() {
      toggleModals("close")
      toggleModals("signUp")
    }

  return (
    <>
      {modalState.signInModal && (
        <div>
          <div 
          className="overlay"
          onClick={closeModal}></div>
          <div className="conteneurModal">
            <div className="centre">
              <button className="close" onClick={closeModal}>
                {" "}
                <RxCross1 />
              </button>
            </div>
            <form ref={formRef} onSubmit={handleForm}>
            <fieldset>
                
                <legend>Connexion</legend>

                <input
                  ref={signInEmail}             
                  type={"email"}
                  placeholder="adresse@mail.fr"
                  name="email"
                  id="signUpEmail"
                  required
                />

                <input
                  ref={signInPassword}         
                  type={"password"}
                  placeholder="mot de passe"
                  name="password"
                  id="password"
                  required
                />
                <p className="red">{validation}</p>

                <button id="validation" type="submit">Se Connecter</button>

                <div className="inscrit">
                  <p onClick={notSubscribedYet}>Pas encore inscrit ?</p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  )
}



