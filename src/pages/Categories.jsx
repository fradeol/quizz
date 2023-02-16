import { Link } from "react-router-dom";
import Header from "../components/header/Header";

export default function Categories() {
    const categorie = ["HTML", "CSS", "JAVASCRIPT", "REACT"]
    return(
        <div>
            <Header/>
            <main>
                <Link to={`/Quiz/${categorie[0]}`}><button className="HTMLButtonColor">{categorie[0]}</button></Link>
                <Link to={`/Quiz/${categorie[1]}`}><button className="CSSButtonColor">{categorie[1]}</button></Link>
                <Link to={`/Quiz/${categorie[2]}`}><button className="JSButtonColor">{categorie[2]}</button></Link>
                <Link to={`/Quiz/${categorie[3]}`}><button className="ReactButtonColor">{categorie[3]}</button></Link>
            </main>
        </div>
        
    )
}