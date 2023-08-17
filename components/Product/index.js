import { useState, useEffect } from "react";

export function Product({ id, name, price, handleAddItem, items }) {
  const alreadyInList = items.find((item) => item.id === id);

  const [counter, setCounter] = useState(
    alreadyInList ? alreadyInList.amount : 0
  );

  useEffect(() => {
    setCounter(counter);
  }, [setCounter, counter]);

  const orderItem = { id, name: name, price, amount: counter };
  //increase counter
  const increase = () => {
    setCounter(counter + 1);
    handleAddItem(orderItem);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      handleAddItem(orderItem);
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
