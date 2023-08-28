import Link from "next/link";
import { StyledLink } from "../StyledLink";
import { StyledOrderButton } from "../StyledButton";

export default function OrderButton() {
  return (
    <>
      <StyledOrderButton>
        <StyledLink href="/order-list">Order Here!</StyledLink>
      </StyledOrderButton>
    </>
  );
}
