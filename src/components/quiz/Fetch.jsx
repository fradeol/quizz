
import { useState, useEffect } from "react";


export default function Fetch({}) {
    const [allQuestion, setAllQuestion] = useState([]);
    const [maSelection, setMaSelection] = useState([])
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [questionHTML, setQuestionHTML] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:8000/api/questions")
        .then(response => response.json())
        .then((data) => {
            setAllQuestion(data);
            // allQuestion.forEach((q) => { 
            
            let limite = 0
            let randTableau = []
            while ( limite < 9) {
                randTableau.push(allQuestion[limite])
                limite++  
            }    
            setMaSelection(randTableau)        
                
            // })

            }
        )
    }, [])
    console.log(maSelection)

    // function random(max) {
    //     return Math.floor(Math.random() * max);
    // }
    // console.log(random(5));
    // let random;
    // let idQuestions = [];
    // let idPartie = [];

    return (
        <div>
            
            <ul>
                {maSelection.map((q, i) => {
                    return (
                    <li key={i}>{q}</li>
                    )
                })}
            </ul> 
            
            {/* {console.log(questionHTML)} */}
            {/* {quizQuestion.map((q)=>{
                if(q.categorie==="HTML")
                
                while(idPartie.length < 4) {
                    random = Math.floor(Math.random() * 10);
                    if(idPartie.indexOf(quizQuestion[random]) === -1) {
                        idPartie.push(quizQuestion[random])
                    }
                    return(
                        idPartie[0].question + "\t"
                    ) 
                }
            })
            }          */}
        </div>
    )
}
