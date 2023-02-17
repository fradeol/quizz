import { useContext } from "react";
import { Link } from "react-router-dom";
import Inscription from "../components/ConnexionInscription/Inscription";
import Connexion from "../components/ConnexionInscription/Connexion";
import Header from "../components/header/Header";
import { UserContext } from "../context/UserContext";


export default function Accueil() {

    const {toggleModals} = useContext(UserContext)

    return (
        <main>
            <Inscription/>
            <Connexion/>
            <Header />
            <Link to='/Categories' ><button>Categories</button></Link>
            <a ><button onClick={() => toggleModals('signIn') }>Se connecter</button></a>
            <a ><button onClick={() => toggleModals('signUp') }>S'inscrire</button></a>
        </main>
    )
}