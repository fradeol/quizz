import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import '../styles/Categories.css'
import { UserContext } from "../context/UserContext";
import logoCrazyQuiz from "../img/logoCrazyQuiz.png";

export default function Categories() {

    const {CategorieTable} = useContext(UserContext);

    
// function renderBasic(){
    return(
        <div className="cate">
            <Header/>
            <main>
            <Link to={`/Start/${CategorieTable[0].categorieQuiz}`}><button className="HTMLButtonColor">{CategorieTable[0].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[1].categorieQuiz}`}><button className="CSSButtonColor">{CategorieTable[1].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[2].categorieQuiz}`}><button className="JSButtonColor">{CategorieTable[2].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[3].categorieQuiz}`}><button className="ReactButtonColor">{CategorieTable[3].categorieQuiz}</button></Link>
            </main>
        </div>
    )
}

