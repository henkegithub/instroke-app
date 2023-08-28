import React from "react";
import { StyledButton } from "../StyledButton";

export default function ShoppingCart({ toggle }) {
  return <StyledButton onClick={toggle}>View Order</StyledButton>;
}
