import Link from "next/link";
import { StyledLink } from "../StyledLink";

export default function OrderButton() {
  return (
    <>
      <button>
        <StyledLink href="/order-list">Order Here!</StyledLink>
      </button>
    </>
  );
}
