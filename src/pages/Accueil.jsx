import { Link } from "react-router-dom";
import Header from "../components/header/Header";

export default function Accueil() {

    return (
        <main>
            <Header />
            <Link to='/Categories' ><button>Categories</button></Link>
            <Link to='/Connexion' ><button>Se connecter</button></Link>
            <Link to='/Inscription' ><button>S'inscrire</button></Link>
        </main>
    )
}