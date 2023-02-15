import "./ConnexionInscription.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Connexion() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { modalState, toggleModals } = useContext(UserContext);

  return (
    <>
      {modalState.signInModal && (
        <div>
          <div 
          className="overlay"
          onClick={() => toggleModals("close")}></div>
          <div className="conteneurModal">
            <form action="">
            <div className="centre">
              <button className="close" onClick={() => toggleModals("close")}>
                {" "}
                <RxCross1 />
              </button>
            </div>
              <fieldset>
                
                <legend>Connexion</legend>

                <input
// AJOUTER UNE REF                
                  type={"email"}
                  placeholder="adresse@mail.fr"
                  name="email"
                  id="signUpEmail"
                  required
                />

                <input
// AJOUTER UNE REF                
                  type={"password"}
                  placeholder="mot de passe"
                  name="password"
                  id="password"
                  required
                />
                <div className="checkbox">
                  <label htmlFor=""> Se souvenir de moi</label>
                  <input type={"checkbox"} />
                </div>

                <button type="submit">S'inscrire</button>

                <div className="inscrit">
                  <Link to="/Inscription">Pas encore inscrit ?</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
