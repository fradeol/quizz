import { Link } from "react-router-dom";
import Connexion from "../../components/ConnexionInscription/Connexion";

import LogOut from "../../components/ConnexionInscription/Deconnexion";
import Inscription from "../../components/ConnexionInscription/Inscription";
import Header from "../../components/header/Header";

export default function Home() {


    return (
        <main>
            <Inscription/>
            <Connexion/>
            <Header />
            <Link to='/Categories' ><button>Categories</button></Link>
            <Link to='/Private/Profil' ><button>Votre Profil</button></Link>
            <LogOut/>
        </main>
    )
}