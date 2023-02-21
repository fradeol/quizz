import { Link } from "react-router-dom";
import logoCrazyQuizCat from "../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../img/logoCrazyQuiz.png";
import logoTrophee from "../img/logoTrophee.png";
import "../styles/Resultat.css";
import logoBrokenTrophee from "../img/logoBrokenTrophee.png";
import { UserContext } from "../context/UserContext";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Quiz() {
  const { CategorieTable } = useContext(UserContext);

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [responses, setReponses] = useState([]);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(20);

  const API_URL = "http://localhost:8000/api/questions";

  let questionFiltered = [];

  const url = new URL(window.location.href);
  const quizParam = url.pathname.split("/")[2];

  async function loadData() {
    await axios(API_URL).then(function (response) {
      let questionsData = response.data;
      let compteur = 0;
      questionsData.forEach((question) => {
        if (question.categorie === quizParam && compteur < 11) {
          questionFiltered.push(question);
          compteur++;
        }
      });
      questionFiltered.sort((a, b) => Math.random() - 0.5);
      setQuestions(questionFiltered);
      setLoading(false);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      let reponseData = [
        questions[actualQuestion].reponse2,
        questions[actualQuestion].reponse3,
        questions[actualQuestion].reponse4,
        questions[actualQuestion].reponse5,
        questions[actualQuestion].reponse6,
        questions[actualQuestion].reponse7,
        questions[actualQuestion].reponse8,
        questions[actualQuestion].reponse9,
        questions[actualQuestion].reponse10,
      ];
      reponseData.sort((a, b) => Math.random() - 0.5);
      reponseData = reponseData.slice(0, 3);
      reponseData.push(questions[actualQuestion].reponse1);
      reponseData.sort((a, b) => Math.random() - 0.5);
      setReponses(reponseData);
    }
  }, [actualQuestion, questions]);

  let isFinish = false;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFinish) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          wrong();
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  function good() {
    setScore(score + 1);
    setActualQuestion(actualQuestion + 1);
    setSeconds(20);
  }

  function wrong() {
    setActualQuestion(actualQuestion + 1);
    setSeconds(20);
  }

  function restart() {
    setActualQuestion(0);
    setScore(0);
    setSeconds(20);
    isFinish = false;
  }
  

  if (loading) {
    
    return (
      <div className="loadGif">
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_lh8mfcj1.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
      </div>
    );
  }

  let color;
  for (let i = 0; i <= CategorieTable.length; i++) {
    if (CategorieTable[i].categorieQuiz === quizParam) {
      color = CategorieTable[i].class;
      break;
    }
  }

  function renderQuestion() {
    const goodAnwser = questions[actualQuestion].reponse1;
    return (
      <main className="conteneurQuiz">
        <h1>{questions[actualQuestion].question}</h1>
        <div className="conteneurTimer">
          <div className="timer">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_9zrznuec.json"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
          <span className="seconds">{seconds}</span>
        </div>
        <div className="conteneurReponse">
          {responses.map((q, j) => {
            if (q === goodAnwser) {
              return (
                <button key={j} className={color} onClick={good}>
                  {q}
                </button>
              );
            } else {
              return (
                <button key={j} className={color} onClick={wrong}>
                  {q}
                </button>
              );
            }
          })}
        </div>
      </main>
    );
  }
  function renderEnd() {
    isFinish = true;
    return (
      <div>
        <header className="resultat">
          <img className="logo" src={logoCrazyQuiz} alt="" />
          <img className="profile" src={logoCrazyQuizCat} alt="" />
        </header>
        <div className="result-content">
          {score >= 5 ? (
            <div>
              <img src={logoTrophee} alt="" />
              <p>
                Féliciation vous avez la moyenne ! Votre score est de : {score}
              </p>
            </div>
          ) : (
            <div>
              <img src={logoBrokenTrophee} alt="" />
              <p>Dommage, vous êtes mauvais. Votre score est de : {score}</p>
            </div>
          )}

          <button onClick={restart}>Recommencer</button>

          <Link to="/categories">
            <button>Categories</button>
          </Link>
        </div>
      </div>
    );
  }
  return actualQuestion < 10 ? renderQuestion() : renderEnd();
}
