import { useState } from "react";

export function Product({ name, price }) {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <li>{name}</li>
      <li>{price} €</li>
      <button className="control__btn" onClick={increase}>
        +
      </button>
      <p>{counter}</p>
      <button className="control__btn" onClick={decrease}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </>
  );
}
