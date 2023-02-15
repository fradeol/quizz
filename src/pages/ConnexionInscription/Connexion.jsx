import "./ConnexionInscription.css";
import { Link } from "react-router-dom"
// import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { RxCross1} from 'react-icons/rx';
import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";

export default function Connexion() {

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

const { modalState, toggleModals } = useContext(UserContext);

  return (
    <>
    {modalState.signInModal && (
    <div className="conteneurModal-Connexion">
      <div className="centre">
      <div className="logoCat">
        <img src={logoCrazyQuizCat} alt="" />
        </div>
      <button className="close" onClick={() => toggleModals("close")}> <RxCross1/></button>
      </div>
      <form action="">
        <fieldset>
          <legend>Connexion</legend>
  

          <input 
          type={"email"} 
          placeholder="adresse@mail.fr" 
          name="email" id="signUpEmail"
          required/>

<input 
          type={"password"} 
          placeholder="mot de passe" 
          name="password" 
          id="password"
          required/>
          <div className="checkbox">
            <label htmlFor="">
              {" "}
              Se souvenir de moi
            </label>
            <input type={"checkbox"} />
            
          </div>

          <button type="submit">S'inscrire</button>

          <div className="inscrit"><Link to='/Inscription' >Pas encore inscrit ?</Link></div>
          
        </fieldset>
      </form>
      
    </div>
     )}
    </>
  );
}
