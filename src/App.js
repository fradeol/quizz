import './App.css';
import logoCrazyQuizCat from "./img/logoCrazyQuizCat.svg";
import logoCrazyQuiz from "./img/logoCrazyQuiz.png";
import logoTrophee from "./img/logoTrophee.png";
import logoBrokenTrophee from "./img/logoBrokenTrophee.png";
import logoHTMLBanner from "./img/logoHTMLBanner.svg";
import logoCSSBanner from "./img/logoCSSBanner.svg";
import logoJSBanner from "./img/logoJSBanner.svg";
import logoReactBanner from "./img/logoReactBanner.svg";

function App() {
  return (

    // Test c'est pas la page d'accueil
    <main>
      <h1>Quiz HTML</h1>
      <h2>Question 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iure, inventore nihil fuga at debitis reiciendis esse voluptate aliquam sit fugiat cupiditate, 
        dolorem numquam veritatis incidunt, obcaecati quis dolore? Accusantium, optio!
        Illum praesentium, maiores labore, quae veniam laudantium at obcaecati facilis voluptatem 
        itaque rem fugiat! Consequuntur, fugiat. Repellat dolorem aperiam illo quas, 
        eum sequi hic veritatis officia debitis, cupiditate sed magnam?
      </p>
      <img src={logoCrazyQuiz} alt="logo du site CrazyQuiz" />
      <img src={logoCrazyQuizCat} alt="logo de la mascotte CrazyQuizCat" />
      <img src={logoTrophee} alt="logo d'un trophée" />
      <img src={logoBrokenTrophee} alt="logo d'un trophée en noir et blanc brisé" />
      <img src={logoHTMLBanner} alt="logo d'une bannière aux couleurs d'HTML" />
      <img src={logoCSSBanner} alt="logo d'une bannière aux couleurs de CSS" />
      <img src={logoJSBanner} alt="logo d'une bannière aux couleurs de JavaScript" />
      <img src={logoReactBanner} alt="logo d'une bannière aux couleurs de React" />

      <button type='button' className='colorHTML'>
        <h2>HTML</h2>
      </button>

      <button type='button' className='colorCSS'>
        <h2>CSS</h2>
      </button>

      <button type='button' className='colorJS'>
        <h2>JS</h2>
      </button>

      <button type='button' className='colorReact'>
        <h2>React</h2>
      </button>

    </main>
  );
}

export default App;
