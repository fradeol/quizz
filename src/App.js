import './App.css';
// import logoCrazyQuizCat from "./img/logoCrazyQuizCat.svg";
// import logoCrazyQuiz from "./img/logoCrazyQuiz.png";
// import logoTrophee from "./img/logoTrophee.png";
// import logoBrokenTrophee from "./img/logoBrokenTrophee.png";
// import logoHTMLBanner from "./img/logoHTMLBanner.svg";
// import logoCSSBanner from "./img/logoCSSBanner.svg";
// import logoJSBanner from "./img/logoJSBanner.svg";
// import logoReactBanner from "./img/logoReactBanner.svg";
// import Accueil from './pages/Accueil';
// import Inscription from './pages/Connexion/Inscription';
// import { Route, Routes } from 'react-router-dom';
import Fetch from './components/quiz/Fetch';
// import Resultat from './pages/Resultat';

function App() {
  return (
    <main>
      {/* <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/Inscription' element={<Inscription/>}></Route>
      </Routes> */}
      <div>
        {/* <Resultat/> */}
        <Fetch />
      </div>
    </main>
  );
}

export default App;
