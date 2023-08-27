import { useState } from "react";
import useTimeout from "./useTimeout";

const TimeoutComponent = () => {
  const [counter, setCounter] = useState(20);
  const [clearTheTimeout, resetTheTimeout] = useTimeout(
    () => setCounter(0),
    2000
  );

  return (
    <>
      <h4>{counter}</h4>
      <div className="buttons">
        <button onClick={() => setCounter((currCounter) => currCounter + 1)}>
          Increment The Counter
        </button>
        <button onClick={clearTheTimeout}>Clear The Timeout</button>
        <button onClick={resetTheTimeout}>Reset The Timeout</button>
      </div>
    </>
  );
};

export default TimeoutComponent;
