import { StyledOrderButton, StyledOrderGhostButton } from "../StyledButton";
import { StyledList } from "../StyledList";
import { StyledParagraph } from "../StyledParagraph";
import { StyledMenuItem } from "../StyledMenuItem";
import { StyledDiv } from "../StyledDiv";

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
    <StyledList>
      <StyledMenuItem>
        <StyledParagraph>
          {name} {price} €
        </StyledParagraph>
        <StyledDiv>
          <StyledOrderButton className="control__btn" onClick={increase}>
            +
          </StyledOrderButton>
          {amount}
          <StyledOrderButton className="control__btn" onClick={decrease}>
            -
          </StyledOrderButton>
          <StyledOrderGhostButton className="reset" onClick={reset}>
            Reset
          </StyledOrderGhostButton>
        </StyledDiv>
      </StyledMenuItem>
    </StyledList>
  );
}
