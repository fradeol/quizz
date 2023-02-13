export default function Fetch() {
//   const url = fetch("http://localhost:8000/api/questions");

//   let rambom;
//   let idQuestions = [];
//   let idReponse = [];
//   let idPartie = [];
//   let categorie = [];
//   let html = [];

//   url
//     .then((response) => {
//       return response.json();
//     })
//     .then((listeQuestions) => {
//       listeQuestions.forEach(function (nosQuestions) {
//         idQuestions.push(nosQuestions.question);
//         idReponse.push(nosQuestions.reponse1);
//         if (nosQuestions.categorie === "HTML") {
//           html.push(nosQuestions.question);
//         }
//       });
//       while (idPartie.length < 1) {
//         rambom = Math.floor(Math.random() * 10);
//         // if (idPartie.indexOf(idQuestions[rambom]) === -1) {
//         //   idPartie.push(idQuestions[rambom]);
//         // }
//         if (html.indexOf(idQuestions[rambom]) === -1) {
//             idPartie.push(idQuestions[rambom]);
//           }

//       }
//     });
//   // console.log(idReponse);
//   // console.log(idPartie);
//   console.log(html);
// }

const urlNotreApi = fetch("http://localhost:8000/api/questions");
let randomNumber;
let allHTMLQuestions = [];
let chosenQuestion = [];
let reponse = [];

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
        // reponse.push(elementDuTableau.id.reponse1)
        // if (elementDuTableau.reponse1 === allHTMLQuestions.values("HTML"))
        // {
        //     reponse.push(elementDuTableau.reponse)
        // }
    // console.log(reponse)
      }
    );
    // console.log(reponse)     
    // while(chosenQuestion.length < 1) 
    // {
      randomNumber = Math.floor(Math.random() * 10);
    //   if(chosenQuestion.indexOf(allHTMLQuestions[randomNumber]) === -1) 
    //   {
        chosenQuestion.push(allHTMLQuestions[randomNumber])
        
    //   }
      
    // }
    console.log(chosenQuestion);
  }
);


}
