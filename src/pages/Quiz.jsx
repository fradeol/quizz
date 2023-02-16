import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";


export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true)
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
        console.log(questions)})
    }

    useEffect(() => {
        loadData()
    }, []);

    if (loading) {
        return (
            <div><lottie-player src="https://assets8.lottiefiles.com/packages/lf20_a2chheio.json"  background="transparent"  speed="1" loop  autoplay></lottie-player></div>
        )
    }
    return(
        <main>
            {questions[1].question}
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
