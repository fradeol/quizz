import "./ConnexionInscription.css";
import Header from "../../components/header/Header";

export default function Inscription() {
  return (
    
    <main>
      <Header/>
      
      <form action="">
        <fieldset>
          <legend>Inscription</legend>
          <input type={"text"} placeholder="pseudo" />
          <input type={"email"} placeholder="adresse@mail.fr" />
          <input type={"password"} placeholder="mot de passe"/>

          <div className="checkbox">
            <label htmlFor="">
              {" "}
              Se souvenir de moi
            </label>
            <input type={"checkbox"} />
          </div>

          <button>S'inscrire</button>
        </fieldset>
      </form>
    </main>
  );
}
