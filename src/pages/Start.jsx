import logoCrazyQuiz from "../img/logoCrazyQuiz.png";
import logoHTMLBanner from "../img/logoHTMLBanner.svg";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../pages/Private/Home.css";

export default function Start() {
  const url = new URL(window.location.href);
  const quizParam = url.pathname.split("/")[2];

  const { CategorieTable } = useContext(UserContext);

  for (let i = 0; i <= CategorieTable.length - 1; i++) {
    if (CategorieTable[i].categorieQuiz === quizParam) {
      let TextBanner = CategorieTable[i].categorieQuiz;
      let CategorieBanner = CategorieTable[i].img;
      let ColorTextBanner = CategorieTable[i].span;
      return (
        <section className="conteneurStart">
          <div className="ImgLogoQuiz">
            <img src={logoCrazyQuiz} alt="" />
          </div>

          <div className="ImgHTML">
            <img src={CategorieBanner} alt="" />
            <span className={ColorTextBanner}>{TextBanner}</span>
          </div>

          <p className="pStart">
            Une réponse possible, <br /> et 20 secondes par questions !!
          </p>
          <main>
            <Link to={`/Quiz/${TextBanner}`}>
              <button className="ButtonStart">Commencer</button>
            </Link>
            <Link to={`/Categories`}>
              <button className="ButtonStart">Retour</button>
            </Link>
          </main>
        </section>
      );
    }
  }
}