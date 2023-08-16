import { useState } from "react";

export function Cart({ id, name, price }) {
  const [items, setItems] = useState(0);

  //count items
  const count = () => {
    if ((items = id && name && price)) {
      setItems((item) => item + 1);
    }
  };
  return (
    <>
      <li>{items}</li>
    </>
  );
}
