import { StyledHeaderPosition } from "@/components/StyledHeader";
import { StyledMain } from "@/components/StyledMain";

export default function Checkout({ selectedTable }) {
  return (
    <StyledMain>
      <StyledHeaderPosition>
        <h1>Congratulations!</h1>
      </StyledHeaderPosition>
      <p>Your Order will be delivered shortly to:</p>
      <p>Table Nr.: {selectedTable}</p>
    </StyledMain>
  );
}
