import logoTrophee from "../img/logoTrophee.png";
import Header from "../components/header/Header";
import '../styles/Resultat.css';
import logoBrokenTrophee from "../img/logoBrokenTrophee.png";
import { Link } from "react-router-dom";

export default function Resultat() {
    let isWon= true;


    return (

        <div>
            <Header />
            
                <div className="result-content">
                    {isWon
                        ? <div>
                            <img src={logoTrophee} alt="" />
                            <p>Féliciation vous avez la moyenne ! Votre score est de : (score)</p>
                        </div>
                        : <div>
                            <img src={logoBrokenTrophee} alt="" />
                            <p>Dommage, vous êtes mauvais. Votre score est de : (score)</p>
                        </div>
                    }
                    <button>Recommencer</button>
                    <Link to='/Categories'>Categories</Link>
                </div>
        </div>

    )
}