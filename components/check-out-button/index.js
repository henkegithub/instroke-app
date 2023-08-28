import { StyledOrderButton } from "../StyledButton";
import { StyledLink } from "../StyledLink";

export default function CheckOutButton() {
  return (
    <>
      <StyledOrderButton>
        <StyledLink href="/check-out">Checkout!</StyledLink>
      </StyledOrderButton>
    </>
  );
}
