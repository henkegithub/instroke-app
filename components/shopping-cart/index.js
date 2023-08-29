import React from "react";
import { StyledOrderButton } from "../StyledButton";

export default function ShoppingCart({ toggle }) {
  return <StyledOrderButton onClick={toggle}>View Order</StyledOrderButton>;
}
