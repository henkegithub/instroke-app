import { StyledOrderButton } from "../StyledButton";
import { StyledList } from "../StyledList";

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
      <StyledList>
        <StyledOrderButton className="control__btn" onClick={increase}>
          +
        </StyledOrderButton>
        <p>{amount}</p>
        <StyledOrderButton className="control__btn" onClick={decrease}>
          -
        </StyledOrderButton>
        <StyledOrderButton className="reset" onClick={reset}>
          Reset
        </StyledOrderButton>
        <p>
          {name} {price} €
        </p>
      </StyledList>
    </>
  );
}
