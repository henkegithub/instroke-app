import { StyledHeaderPosition } from "@/components/StyledHeader";
import { StyledMain } from "@/components/StyledMain";
import { StyledMenuContainerCheckout } from "@/components/StyledMenuContainer";
import {
  StyledParagraph,
  StyledParagraphCheckout,
  StyledParagraphTable,
} from "@/components/StyledParagraph";

export default function Checkout({ selectedTable }) {
  return (
    <StyledMain>
      <StyledMenuContainerCheckout>
        <StyledHeaderPosition>
          <h1>Congratulations!</h1>
        </StyledHeaderPosition>
        <StyledParagraphCheckout>
          Your order was succesfull!
        </StyledParagraphCheckout>
        <StyledParagraphCheckout>Table Nr.: </StyledParagraphCheckout>
        <StyledParagraphTable>{selectedTable}</StyledParagraphTable>
      </StyledMenuContainerCheckout>
    </StyledMain>
  );
}
