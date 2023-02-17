import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { navigate, useNavigate } from "react-router-dom";

export default function Inscription() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);

  const navigate = useNavigate();

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };

  const formRef = useRef();

  const handleForm = async (element) => {
    element.preventDefault();

    if ( (inputs.current[1].value.length || inputs.current[2].value.length) < 8) {

      setValidation(" 8 caractères minimum");
      return;
      
    } else if (inputs.current[1].value !== inputs.current[2].value) {

      setValidation("les mots de passe ne correspondent pas")
      return;
    }

    try {
       await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("")
      toggleModals("close")
      navigate("/Private/Home")
      
    } catch (error) {
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
          <div className="conteneurModal">
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
                  ref={addInputs}               
                  type={"email"}
                  placeholder="adresse@mail.fr"
                  name="email"
                  id="signUpEmail"
                  required
                />
                <input
                  ref={addInputs}               
                  type={"password"}
                  placeholder="mot de passe"
                  name="password"
                  id="password"
                  required
                />

                <input
                  ref={addInputs}               
                  type={"password"}
                  placeholder="repeter mot de passe"
                  name="repeatPassword"
                  id="repeatPassword"
                  required
                />
                <p className="red">{validation}</p>
                <div className="checkbox">
                  <label htmlFor=""> Se souvenir de moi</label>
                  <input type={"checkbox"} />
                </div>
                <button type="submit">S'inscrire</button>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
