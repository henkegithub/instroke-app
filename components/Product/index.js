import { useState, useEffect } from "react";

export function Product({ id, name, price, handleAmountChange, amount = 0 }) {
  //const alreadyInList = items.find((item) => item.id === id);

  // const [counter, setCounter] = useState(
  //   alreadyInList ? alreadyInList.amount : 1
  // );

  // useEffect(() => {
  //   setCounter(counter);
  // }, [setCounter, counter]);

  //const orderItem = { id, name: name, price, amount: counter };
  //increase counter
  // const increase = () => {
  //   setCounter(counter + 1);
  //   handleAddItem(orderItem);
  // };

  // //decrease counter
  // const decrease = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //     handleAddItem(orderItem);
  //   }
  // };

  // //reset counter
  // const reset = () => {
  //   setCounter(0);
  // };

  const increase = () => {
    handleAmountChange(id, amount + 1);
  };

  const decrease = () => {
    handleAmountChange(id, amount - 1);
  };

  const reset = () => {
    handleAmountChange(id, 0);
  };
  return (
    <>
      <li>{name}</li>
      <li>{price} €</li>
      <button className="control__btn" onClick={increase}>
        +
      </button>
      <p>{amount}</p>
      <button className="control__btn" onClick={decrease}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </>
  );
}
