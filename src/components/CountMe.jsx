import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../reducers/sample.reducer";

const CountMe = () => {
  //   const counter = useSelector((state) => state.counterInfo.counterValue);
  const counter = useSelector((state) => state.sampleBoiii);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState("");
  const [decrementBy, setDecrementBy] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          name="incrementBy"
          placeholder="incrementBy"
          onChange={(e) => {
            setIncrementBy(e.target.value);
          }}
        />
        <input
          type="number"
          name="decrementBy"
          placeholder="decrementBy"
          onChange={(e) => {
            setDecrementBy(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => dispatch(increment(Number(incrementBy)))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement(Number(decrementBy)))}>
        Decrement
      </button>

      <h4>Counter : {counter}</h4>
    </div>
  );
};

export default CountMe;
