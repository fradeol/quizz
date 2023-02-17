import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

export default function Connexion() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const inputs = useRef([]);

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

    try {
       await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      setValidation("");
      toggleModals("close")
      navigate ("/Private/Home")
      
    } catch (error) {
       setValidation("L'email ou le mot de passe n'est pas le bon")
        }
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
                <p className="red">{validation}</p>
                {/* <div className="checkbox">
                  <label htmlFor=""> Se souvenir de moi</label>
                  <input type={"checkbox"} />
                </div> */}

                <button type="submit">se connecter</button>

                <div className="inscrit">
                  <Link to="/Inscription">Pas encore inscrit ?</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  )
}



