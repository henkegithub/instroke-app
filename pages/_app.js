import { useState, useEffect } from "react";
import GlobalStyle from "../styles";

export const maindishes = [
  {
    id: "1",
    name: "Schnitzel",
    price: 10.5,
  },
  {
    id: "2",
    name: "Spätzle",
    price: 9.5,
  },
  {
    id: "3",
    name: "Rindergulasch",
    price: 18.5,
  },
  {
    id: "4",
    name: "Sauerbraten",
    price: 14.5,
  },
];

export const drinks = [
  {
    id: "5",
    name: "Apfelschorle",
    price: 2.5,
  },
  {
    id: "6",
    name: "Johannisbeersaft",
    price: 2.5,
  },
  {
    id: "7",
    name: "Zitroneneistee",
    price: 3.5,
  },
  {
    id: "8",
    name: "Pfirsicheistee",
    price: 3.5,
  },
];

export default function App({ Component, pageProps }) {
  const [items, setItems] = useState([]);
  console.log("items:", items);
  function handleAmountChange(id, amount) {
    const alreadyInList = items.find((item) => item.id === id);
    if (alreadyInList) {
      setItems(
        items.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                amount: Math.max(amount, 0),
              }
        )
      );
      return;
    }
    const dish = maindishes.find((item) => item.id === id);
    setItems([...items, { ...dish, amount: Math.max(amount, 0) }]);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAmountChange={handleAmountChange}
        items={items}
      />
    </>
  );
}
