import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { getJoke } from "./reducers/async.reducer";

// TODO Components
import Login from "./components/Login";
import CountMe from "./components/CountMe";

function App() {
  const dispatch = useDispatch();
  const jokeDATA = useSelector((state) => state.jokeData);

  return (
    <div className="App">
      <h1>Hello Redux Toolkit</h1>
      <hr />
      <Login />
      <hr />
      <CountMe />
      <hr />
      {jokeDATA?.type && (
        <>
          <p>setup: {jokeDATA.setup}</p>
          <p>punchline: {jokeDATA.punchline}</p>
        </>
      )}
      <button onClick={() => dispatch(getJoke())}>
        {jokeDATA.loading ? "loading" : "Tell Me Joke"}
      </button>
    </div>
  );
}

export default App;
