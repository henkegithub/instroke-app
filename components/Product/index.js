export function Product({ id, name, price, handleAmountChange, amount = 0 }) {
  const increase = () => {
    handleAmountChange(id, amount + 1);
  };

  const decrease = () => {
    if (amount !== 0) {
      handleAmountChange(id, amount - 1);
    }
  };

  const reset = () => {
    if (amount !== 0) {
      handleAmountChange(id, 0);
    }
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
