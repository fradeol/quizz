import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [responses, setReponses] = useState([]);
  const [first, setFirst] = useState(false);
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
        if (question.categorie === quizParam && compteur < 10) {
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

  function change() {
    setActualQuestion(actualQuestion + 1);
  }

  if (!loading) {
    if (!first) {
    let reponseData = [
      // questions[actualQuestion].reponse1,
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
    setReponses(reponseData);
    console.log(reponseData);
    setFirst(true);
  }
  }

  

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
  return (
    <main>
      <h1>{questions[actualQuestion].question}</h1>
      {/* <ul>
                {questions.map(q => (
                    <li key={q.id}>{q.question}</li>
                ))}
            </ul> */}
      {responses.map((q) => (
        <div>
          <button onClick={change}>{responses}</button>
          <button onClick={change}>2</button>
          <button onClick={change}>3</button>
          <button onClick={change}>4</button>
        </div>
      ))}

      <Link to="/Resultat">
        <button>Resultats</button>
      </Link>
    </main>
  );
}
