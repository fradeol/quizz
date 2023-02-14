import { Link } from "react-router-dom";

export default function Quiz() {
    return(
        <main>
            
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>

            <Link to='/Resultat'><button>Resultats</button></Link>  
        </main>
    )
}