
import { useState, useEffect } from "react";


export default function Fetch() {
    const [allQuestion, setAllQuestion] = useState([]);
    const [maSelection, setMaSelection] = useState([]);
    const [loading, setLoading] = useState(true);
    // const categorieId = id == 1 ? "Sport" : id == 2 ? "Science" : id == 3 ? "Histoire/Geo" : "Littérature" 
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [questionHTML, setQuestionHTML] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:8000/api/questions")
        .then(response => response.json())
        .then((data) => {
            setAllQuestion(data);
            console.log(allQuestion)
            console.log(data);
            // allQuestion.forEach((q) => { 
            
            let limite = 0

            let randTableau = []
            while ( limite < 10) {
                randTableau.push(data[limite].question)
                limite++
            }    

            setMaSelection(randTableau)        
                setLoading(false)
            // })

            }
        )
    }, [])

    if (loading) {
        return (
        <div>Loading...</div>
        )
    }
    // console.log(maSelection)

    // function random(max) {
    //     return Math.floor(Math.random() * max);
    // }
    // console.log(random(5));
    // let random;
    // let idQuestions = [];
    // let idPartie = [];

    return (
        <div>
            <button onClick={console.log(maSelection)}></button>
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
