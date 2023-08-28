import { styled } from "styled-components";
import { StyledOrderButton, StyledOrderGhostButton } from "../StyledButton";
import { StyledList } from "../StyledList";
import { StyledParagraph } from "../StyledParagraph";

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

const StyledMenuItem = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;
