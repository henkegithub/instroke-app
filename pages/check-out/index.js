import { StyledHeaderPosition } from "@/components/StyledHeader";
import { StyledMain } from "@/components/StyledMain";
import { StyledMenuContainerCheckout } from "@/components/StyledMenuContainer";
import {
  StyledParagraph,
  StyledParagraphTable,
} from "@/components/StyledParagraph";

export default function Checkout({ selectedTable }) {
  return (
    <StyledMain>
      <StyledMenuContainerCheckout>
        <StyledHeaderPosition>
          <h1>Congratulations!</h1>
        </StyledHeaderPosition>
        <StyledParagraph>Your order was succesfull!</StyledParagraph>
        <StyledParagraph>Table Nr.: </StyledParagraph>
        <StyledParagraphTable>{selectedTable}</StyledParagraphTable>
      </StyledMenuContainerCheckout>
    </StyledMain>
  );
}
