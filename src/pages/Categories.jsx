import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { UserContext } from "../context/UserContext";
import logoCrazyQuiz from "../img/logoCrazyQuiz.png";

export default function Categories() {

    // const url = new URL(window.location.href);
    // const quizParam = url.pathname.split("/")[1];
    // console.log(quizParam);
    // quizParam.push("/HTML");
    // console.log(quizParam);

    const {CategorieTable} = useContext(UserContext);

    // const [currentPage, setCurrentPage] = useState(0)

    // function changePage(){
    //     setCurrentPage(1)
    //     console.log(currentPage);
    // }

//     let Categorie;
//   for (let i = 0; i <= CategorieTable.length -1 ; i++) {
//     if (CategorieTable[i].categorie === quizParam) {
//       Categorie = CategorieTable[i].categorieQuiz;
//       console.log(Categorie);
//     }
//   }

//   let img;
//   for (let i = 0; i <= CategorieTable.length -1 ; i++) {
//     if (CategorieTable[i].categorie === quizParam) {
//       img = CategorieTable[i].img;
//       console.log(img);
      
//     }
//   }
  

    // function renderStart() {
    //     console.log("coucou")
    //     return(
            
    //         <section className="conteneurStart">
                
    //         <div className="ImgLogoQuiz"><img src={logoCrazyQuiz} alt="" /></div>

    //         <div className="ImgHTML"><img src={CategorieTable[0].img} alt="" /><span>{Categorie}</span></div>

    //         <p className="pStart">Une réponse possible, <br /> et 20 secondes par questions !!</p>

    //         <Link to={`/Quiz/${CategorieTable[0].categorieQuiz}`}> <button className="BtnStart">Commencer</button></Link>
    //     </section>
    //     )
    // }
// function renderBasic(){
    return(
        <div>
            <Header/>
            <main>
            <Link to={`/Start/${CategorieTable[0].categorieQuiz}`}><button className="HTMLButtonColor">{CategorieTable[0].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[1].categorieQuiz}`}><button className="CSSButtonColor">{CategorieTable[1].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[2].categorieQuiz}`}><button className="JSButtonColor">{CategorieTable[2].categorieQuiz}</button></Link>
                <Link to={`/Start/${CategorieTable[3].categorieQuiz}`}><button className="ReactButtonColor">{CategorieTable[3].categorieQuiz}</button></Link>
            </main>
        </div>
    )
}
    
    // return currentPage === 0 ? renderBasic() : renderStart();
