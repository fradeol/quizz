import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../../img/logoCrazyQuiz.png";
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/Private/Home"><figure className="imgLogo">
        <img src={logoCrazyQuiz} alt="" />
      </figure></Link>
      <Link to="/Private/Home"><figure className="imgCat">
      <img src={logoCrazyQuizCat} alt="" />
    </figure></Link>
    </header>
  );
}
