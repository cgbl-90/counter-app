import logo from "./logo.svg";
import carmen from "./carmen.svg";
import Counter from "./counter";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src={carmen} className="logo" alt="Carmen López" />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="react-logo logo" alt="React logo" />
        </a>
      </header>
      <main>
        <Counter />
      </main>
      <footer>
        <p>Coded by Carmen López @ 2022</p>
      </footer>
    </div>
  );
}

export default App;
