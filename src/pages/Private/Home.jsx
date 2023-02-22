import { Link } from "react-router-dom";
import Connexion from "../../components/ConnexionInscription/Connexion";
import './Home.css'
import LogOut from "../../components/ConnexionInscription/Deconnexion";
import Inscription from "../../components/ConnexionInscription/Inscription";
import Header from "../../components/header/Header";

export default function Home() {


    return (
        <main className="connected">
            <Inscription/>
            <Connexion/>
            <Header />
            <div className="connectedBtn">
                <Link to='/Categories' >Categories</Link>
                <div className="Connexion">
                <Link to='/Private/Profil' >Votre Profil</Link>
                <LogOut/>
                </div>
            </div>
        </main>
    )
}