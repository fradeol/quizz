import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Inscription() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);

 

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

      setValidation("les mots de passe ne corresponde pas")
      return;
    }

    try {
      const credential = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("")
      
    } catch (error) {
    }
  }

  return (
    <>
      {modalState.signUpModal && (
        <div>
          <div 
          className="overlay"
          onClick={() => toggleModals("close")}></div>
          <div className="conteneurModal">
            <div className="centre">
              <button className="close" onClick={() => toggleModals("close")}>
                {" "}
                <RxCross1 />
              </button>
            </div>
            <form ref={formRef} onSubmit={handleForm}>
              <fieldset>
                <legend>Inscription</legend>
                {/* <input
            type={"text"}
            placeholder="pseudo"
            name="pseudo"
            id="pseudo"
            required/> */}
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
                  name="pwd"
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
