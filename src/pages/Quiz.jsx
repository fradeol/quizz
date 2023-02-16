import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";


export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true)
    // const [indexAnswer, setIndexAnswer] = useState([0])
    // const [maSelection, setMaSelection] = useState([])
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [questionHTML, setQuestionHTML] = useState([])
    
    const API_URL = "http://localhost:8000/api/questions"

    async function loadData() {
        const url = new URL(window.location.href)
        const quizParam = url.pathname.split('/')[2]
        await axios(API_URL)
        .then(function (response){
        let questionsData = response.data
        let questionFiltered = []
        let compteur = 0
        questionsData.forEach(question => {
            if(question.categorie === quizParam && compteur < 10) {
                questionFiltered.push(question)
                compteur++
            }
        });
        questionFiltered.sort((a, b) => Math.random() - 0.5);
        setQuestions(questionFiltered)
        setLoading(false)
        console.log(questionFiltered)
        
        
        })
    }

    useEffect(() => {
        loadData()
    }, []);
    // let goodAnswer = questions[0].reponse1
    // const mixedQuestion = []
    const wrongAnswers = {
        reponse2: questions[0].reponse2,
        reponse3: questions[0].reponse3,
        reponse4: questions[0].reponse4,
        reponse5: questions[0].reponse5,
        reponse6: questions[0].reponse6,
        reponse7: questions[0].reponse7,
        reponse8: questions[0].reponse8,
        reponse9: questions[0].reponse9,
        reponse10: questions[0].reponse10
    }
    console.log(wrongAnswers);
    // wrongAnswers.forEach(answer => {
    //     mixedQuestion.push(answer)
    // });
    // console.log(mixedQuestion);
    if (loading) {
        return (
            <div><lottie-player src="https://assets8.lottiefiles.com/packages/lf20_a2chheio.json"  background="transparent"  speed="1" loop  autoplay></lottie-player></div>
        )
    }
    return(
        <main>
            <br />
            {questions[0].question}
            {/* <ul>
                {questions.map(q => (
                    <li key={q.id}>{q.question}</li>
                ))}
            </ul> */}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>

            <Link to='/Resultat'><button>Resultats</button></Link>  
        </main>
    )
}
