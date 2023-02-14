import { Link } from "react-router-dom";
import Header from "../components/header/Header";

export default function Categories() {
    return(
        <div>
            <Header/>
            <main>
                <Link to='/Quiz'><button className="HTMLButtonColor">HTML</button></Link>
                <Link to='/Quiz'><button className="CSSButtonColor">CSS</button></Link>
                <Link to='/Quiz'><button className="JSButtonColor">JavaScript</button></Link>
                <Link to='/Quiz'><button className="ReactButtonColor">React</button></Link>
            </main>
        </div>
        
    )
}