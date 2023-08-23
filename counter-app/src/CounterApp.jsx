import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const counterIncremet = () => setCounter(counter + 1);

  return (
    <>
      <h2>El valor del contador es {counter} </h2>;
      <button onClick={() => counterIncremet()}>Increment Counter +1</button>
    </>
  );
};
