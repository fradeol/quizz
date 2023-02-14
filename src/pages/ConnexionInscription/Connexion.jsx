import "./ConnexionInscription.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import Header from "../../components/header/Header";

export default function Connexion() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <main>
      <Header/>
      <form action="">
        <fieldset>
          <legend>Connexion</legend>
          <input type={"email"} placeholder="adresse@mail.fr" />
          <input type={"password"} placeholder="mot de passe"/>

          <div className="checkbox">
            <label htmlFor="">
              {" "}
              Se souvenir de moi
            </label>
            <input type={"checkbox"} />
          </div>
          <Link to='/Connexion' ><button>Se connecter</button></Link>
          
        </fieldset>
      </form>
      <div className="inscrit"><Link to='/Inscription' >Pas encore inscrit ?</Link></div>
    </main>
  );
}
