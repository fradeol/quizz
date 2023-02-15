import "./ConnexionInscription.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Inscription() {
  const { modalState, toggleModals } = useContext(UserContext);

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
            <form action="">
              <fieldset>
                <legend>Inscription</legend>
                {/* <input
            type={"text"}
            placeholder="pseudo"
            name="pseudo"
            id="pseudo"
            required/> */}
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

                <input
// AJOUTER UNE REF                
                  type={"password"}
                  placeholder="repeter mot de passe"
                  name="repeatPassword"
                  id="repeatPassword"
                  required
                />
                <p className="red">Validation</p>
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
