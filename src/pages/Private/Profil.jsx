import './Profil.css'
import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";
import logoTrophee from "../../img/logoTrophee-removebg-preview.png";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Profil() {

    const {currentUser} = useContext(UserContext)
    console.log(currentUser);
    return (
        <div className="profil">
            <div className='score'>
                <img src={logoTrophee} alt="" />
                <p>1850 pts</p>
            </div>
            <img src={logoCrazyQuizCat} alt="" />
            <div className='courbe'></div>
            <div className="donneesUser">
                {/* <p>{currentUser.displayName}</p> */}
                <p>{currentUser.email}</p>
                <p>Modifier mot de passe</p>
            </div>
            
            <div className='connectedBtn'>
                {/* <Link to='/Private/Home' >Historique des scores</Link> */}
                <Link to='/Private/Home' >Retour</Link>
            </div>
            
        </div>
        
    )
}