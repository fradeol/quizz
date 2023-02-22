import './App.css';
import Router from './components/Router';
import Decompte from './pages/Decompte';
import LocalStorage from './LocalStorage';
function App() {
  return (
    <div className="App">
      {/* <LocalStorage/> */}
      <Router />
      {/* <Decompte/> */}
    </div>
  );
}

export default App;
