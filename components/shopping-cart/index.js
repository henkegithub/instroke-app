import React from "react";

export default function ShoppingCart({ toggle }) {
  return (
    <div>
      <button onClick={toggle}>View Order</button>
    </div>
  );
}
