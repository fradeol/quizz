import { useContext } from "react";
import { Link } from "react-router-dom";
import Inscription from "../components/ConnexionInscription/Inscription";
import Connexion from "../components/ConnexionInscription/Connexion";
import Header from "../components/header/Header";
import { UserContext } from "../context/UserContext";
import '../styles/Accueil.css'

export default function Accueil() {

    const {toggleModals} = useContext(UserContext)

    return (
        
            <main>
                <Inscription/>
                <Connexion/>
                <Header />
                <div className="acc">
                    <div className="btn-acc">
                        <Link to='/Categories' >Categories</Link>
                        <div className="Connexion">
                        <button onClick={() => toggleModals('signIn') }>Se connecter</button>
                        <button onClick={() => toggleModals('signUp') }>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </main>
    )
}