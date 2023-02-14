import { useState, useEffect } from "react";


export default function Fetch() {

const urlNotreApi = fetch("http://localhost:8000/api/questions");
let randomNumber;
let allHTMLQuestions = [];
let chosenQuestion = [];

urlNotreApi.then
(response => 
  {
    return response.json();
  }
)

.then
(notreTableau => 
  {
    notreTableau.forEach
    (function(elementDuTableau)
      {
        if (elementDuTableau.categorie === "HTML") 
        {
          allHTMLQuestions.push(elementDuTableau.question);
        }
      
      }
    );
    
      randomNumber = Math.floor(Math.random() * 10);

        chosenQuestion.push(allHTMLQuestions[randomNumber])
        

    console.log(chosenQuestion);
  }
);

const [quizQuestion, setQuizQuestion] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0)
   
useEffect(() => {
fetch("http://localhost:8000/api/questions")
        
.then(response => response.json())
        
.then((data) => {
              setQuizQuestion(data);
            }
        )
}, [])

    // quizQuestion.filter(categorie === "HTML")

    let random;
    // let idQuestions = [];
    let idPartie = [];

    // }).then(listeQuestions => {
    //         listeQuestions.forEach(function(nosQuestion){
    //         if (nosQuestion.categorie === "HTML") {
    //             idQuestions.push(nosQuestion.question);
    //         }
            
            // idReponse.push(question.reponse1);
            // categorie.push(question.categorie)
        //     });
        //     while(idPartie.length < 4) {
        //         random = Math.floor(Math.random() * 10);
        //         if(idPartie.indexOf(idQuestions[random]) === -1) {
        //             idPartie.push(idQuestions[random])
        //         }
        //     }
        // });
        // console.log(idReponse);
        // console.log(idPartie);
        // console.log(categorie);  
        
        const generateQuestion = () => {
            quizQuestion.map((q) => {
                if (q.categorie === "HTML") {
                    while (idPartie.length < 4) {
                        random = Math.floor(Math.random() * 10);
                        if(idPartie.indexOf(quizQuestion[random]) === -1) {
                            idPartie.push(quizQuestion[random])
                        }
                        
                    }
                    return(
                            setQuizQuestion(idPartie)
                        )
                }
            })
        }


return (
  <div>
      {generateQuestion()}
      {console.log(quizQuestion)}
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
  
