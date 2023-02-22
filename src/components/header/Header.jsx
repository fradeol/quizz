import logoCrazyQuizCat from "../../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../../img/logoCrazyQuiz.png";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FaCircle } from "react-icons/fa";

export default function Header() {
  const { currentUser } = useContext(UserContext);

  const {logOut} = useContext(UserContext)

  const {toggleModals} = useContext(UserContext)

  if (!currentUser) {
    return (
      <header>
        <Link to="/Private/Home">
          <div className="ImgLogoQuiz">
            <img src={logoCrazyQuiz} alt="" />
          </div>
        </Link>
      
          <div className="imgCat">
            <img src={logoCrazyQuizCat} alt="" />
            < FaCircle className="FaCircleLogOut" onClick={() => toggleModals('signIn') }/>
          </div>
       
      </header>
    );
  }

  return (
    <header>
      <Link to="/Private/Home">
        <div className="ImgLogoQuiz">
          <img src={logoCrazyQuiz} alt="" />
        </div>
      </Link>
      
        <div className="imgCat">
          <img src={logoCrazyQuizCat} alt="" />
          < FaCircle className="FaCircleLogIn" onClick={logOut} />
        </div>
      
    </header>
  );
}
