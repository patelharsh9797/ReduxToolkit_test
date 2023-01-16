import "./App.css";

// TODO Components
import Login from "./components/Login";
import CountMe from "./components/CountMe";

function App() {
  return (
    <div className="App">
      <h1>Hello Redux Toolkit</h1>
      <hr />
      <Login />
      <hr />
      <CountMe />
      <hr />
    </div>
  );
}

export default App;
