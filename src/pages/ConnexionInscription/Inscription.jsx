import "./ConnexionInscription.css";
import Header from "../../components/header/Header";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { RxCross1} from 'react-icons/rx';
import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";

export default function Inscription() {

  const { modalState, toggleModals } = useContext(UserContext);

  return (
    
<>
{modalState.signUpModal && (
    <div className="conteneurModal">
      <div className="centre">
        <div className="logoCat">
        <img src={logoCrazyQuizCat} alt="" />
        </div>
      <button className="close" onClick={() => toggleModals("close")}> <RxCross1/></button>
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

<input 
          type={"password"} 
          placeholder="repeter mot de passe" 
          name="repeatPassword" 
          id="repeatPassword"
          required/>
        <p className="red">Validation</p>
          <div className="checkbox">
            <label htmlFor="">
              {" "}
              Se souvenir de moi
            </label>
            <input type={"checkbox"} />
            
          </div>

          <button type="submit">S'inscrire</button>
        </fieldset>
      </form>
    </div>
    )}
    </>  
  );
}
