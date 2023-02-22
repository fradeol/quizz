import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../../img/logoCrazyQuiz.png";
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/Private/Home">
        <div className="ImgLogoQuiz">
          <img src={logoCrazyQuiz} alt="" />
        </div></Link>
      <Link to="/Private/Home"><figure className="imgCat">
      <img src={logoCrazyQuizCat} alt="" />
    </figure></Link>
    </header>
  );
}
