
import { useState, useEffect } from "react";


export default function Fetch({}) {
    const [allQuestion, setAllQuestion] = useState([]);
    const [maSelection, setMaSelection] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [questionHTML, setQuestionHTML] = useState([])
   
    useEffect(() => {
        loadData()
        // getData()
        
        // fetch("http://localhost:8000/api/questions")
        // .then(response => response.json())
        // .then(data => {
        //    console.log(data)
        //     // allQuestion.forEach((q) => { 
            
        //     let limite = 0
        //     let randTableau = []
        //     while ( limite < 10) {
        //         randTableau.push(allQuestion[limite].question)
        //         limite++  
        //     }    
        //     setMaSelection(randTableau)        
           
        // })
    }, []);
    // console.log(maSelection)

    const loadData = async () => {
        await fetch("http://localhost:8000/api/questions")
        .then(response => response.json())
        .then(data => setAllQuestion(data))
        
        

    }


    return (
        
        <div>
            {allQuestion.map(q => (
                <div key={q.id}>{q.question}</div>
            ))}
            {/* <ul>
                {maSelection.map((q) => {
                    return (
                    <li key={q.id}>{q.question}</li>
                    )
                })}
            </ul>  */}
            
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
