import './App.css';
import Router from './components/Router';
import Fetch from './components/quiz/Fetch';
import SignUpModal from './context/UserContext';
import Timer from './components/quiz/Timer';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
