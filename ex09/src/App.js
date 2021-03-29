import logo from './logo.svg';
import './App.css';
import Flower from './Flower'

function App() {
  return (
    
    <div className="App">
        <Flower color="red" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      
    </div>
  );
}

export default App;
