import logoTrophee from "../img/logoTrophee.png";
import logoCrazyQuizCat from "../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../img/logoCrazyQuiz.png";
import '../styles/Resultat.css';
import logoBrokenTrophee from "../img/logoBrokenTrophee.png";
import { Link } from "react-router-dom";

export default function Resultat() {
    let isWon= true;


    return (
        
        <div className="resultat">
            <header >
                <img className="logo" src={logoCrazyQuiz} alt="" />
                <img className="profile" src={logoCrazyQuizCat} alt="" />
            </header>
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