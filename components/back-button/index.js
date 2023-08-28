import Link from "next/link";
import { StyledLink } from "../StyledLink";
import { StyledOrderButton } from "../StyledButton";

export default function BackButton() {
  return (
    <>
      <StyledOrderButton>
        <StyledLink href="./">Go Back!</StyledLink>
      </StyledOrderButton>
    </>
  );
}
