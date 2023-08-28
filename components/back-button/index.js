import Link from "next/link";
import { StyledLink } from "../StyledLink";

export default function BackButton() {
  return (
    <>
      <button>
        <StyledLink href="./">Go Back!</StyledLink>
      </button>
    </>
  );
}
