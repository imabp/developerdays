import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Fill the form to avail the giveaway, https://forms.gle/t48Yo8GWne8s1cR99")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Developer Days
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open console, to avail the giveaway.
        </a>
      </header>
    </div>
  );
}

export default App;
