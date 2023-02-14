import './App.css';
import Router from './components/Router';
import Fetch from './components/quiz/Fetch';

function App() {
  return (
    <div className="App">
      <Fetch/>
      <Router />
    </div>
  );
}

export default App;
