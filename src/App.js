import logo from "./logo.svg";
import SelectBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SelectBar
          title="Enter your classes."
          label="Class"
          keyName={"Class"}
          choices={options}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const options = [
  { value: "AERO ST 1A - Liscombe", label: "AERO ST 1A - Liscombe" },
  { value: "AERO ST 20A - Liscombe", label: "AERO ST 20A - Liscombe" },
  { value: "AERO ST 130A - Jones", label: "AERO ST 130A - Jones" },
  { value: "AERO ST 140A - Fowler", label: "AERO ST 140A - Fowler" },
  { value: "AF AMER 1 - Pierre", label: "AF AMER 1 - Pierre" },
];
