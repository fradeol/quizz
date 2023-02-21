import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import '../styles/Categories.css'
import { UserContext } from "../context/UserContext";

export default function Categories() {

    const {CategorieTable} = useContext(UserContext);
    return(
        <div className="cate">
            <Header/>
            <main>
                <Link to={`/Quiz/${CategorieTable[0].categorieQuiz}`}><button className="HTMLButtonColor">{CategorieTable[0].categorieQuiz}</button></Link>
                <Link to={`/Quiz/${CategorieTable[1].categorieQuiz}`}><button className="CSSButtonColor">{CategorieTable[1].categorieQuiz}</button></Link>
                <Link to={`/Quiz/${CategorieTable[2].categorieQuiz}`}><button className="JSButtonColor">{CategorieTable[2].categorieQuiz}</button></Link>
                <Link to={`/Quiz/${CategorieTable[3].categorieQuiz}`}><button className="ReactButtonColor">{CategorieTable[3].categorieQuiz}</button></Link>
            </main>
        </div>
    )
}