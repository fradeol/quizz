import { Link } from "react-router-dom";
import logoCrazyQuizCat from "../img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "../img/logoCrazyQuiz.png";
import logoTrophee from "../img/logoTrophee.png";
import "../styles/Resultat.css";
import logoBrokenTrophee from "../img/logoBrokenTrophee.png";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [responses, setReponses] = useState([]);
  const [first, setFirst] = useState(false);
  const [score, setScore] = useState(0);
  
  // const [maSelection, setMaSelection] = useState([])
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const [questionHTML, setQuestionHTML] = useState([])

  const API_URL = "http://localhost:8000/api/questions";

  let questionFiltered = [];

  async function loadData() {
    const url = new URL(window.location.href);
    const quizParam = url.pathname.split("/")[2];
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
      console.log(questionFiltered);
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


  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(true);

  function stop() {
      setSeconds(0)
  }

  useEffect(() => {
const timer = setInterval(() => {
  if(seconds > 0){
      setSeconds( seconds - 1 );
  }
      }, 1000)
      return () => clearInterval(timer)  
  })
  

  function good() {
    setScore(score + 1);
    setActualQuestion(actualQuestion + 1);
  }

  function wrong() {
    setActualQuestion(actualQuestion + 1);
  }

  const categorie = ["HTML", "CSS", "JavaScript", "React"]

  if (loading) {
    return (
      <div>
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_a2chheio.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
  function renderQuestion() {
    const goodAnwser = questions[actualQuestion].reponse1;
    return (
      <main>
       
        <h1>{questions[actualQuestion].question}</h1>
        <div className="containerTimer">
            <div className="timer"><lottie-player src="https://assets9.lottiefiles.com/packages/lf20_9zrznuec.json"  background="transparent"  speed="0.8" loop  autoplay></lottie-player></div>
            <h1>{seconds}</h1>
        </div>
        {responses.map((q, i) => {
          if (q === goodAnwser) {
            return (
              <button className="reponse" key={i} onClick={good}>
              <p> good{q} </p>
              </button>
            );
          } else {
            return (
              <button className="reponse" key={i} onClick={wrong}>
                <p>{q} </p> 
              </button>
            );
          }
        })}

        {/* <Link to="/Resultat">
          <button>Resultats</button>
        </Link> */}
      </main>
    );
  }
  function renderEnd() {
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

          <Link to={`/Quiz/${categorie[0]}`}><button>Recommencer</button></Link>
          <Link to="/categories"><button>Categories</button></Link>
        </div>
      </div>
    );
  }
  return actualQuestion < 10 ? renderQuestion() : renderEnd();
}
