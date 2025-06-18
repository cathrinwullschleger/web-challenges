import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  //let count = 0;
  function handleIncreaseCount() {
    setCount(count + 1);
  }
  function handleDecreaseCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDecreaseCount}>
          -
        </button>
        <button type="button" onClick={handleIncreaseCount}>
          +
        </button>
      </div>
    </div>
  );
}
