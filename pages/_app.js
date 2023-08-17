import { useState } from "react";
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
  function handleAddItem(newItem) {
    const alreadyInList = items.find((item) => item.id === newItem.id);
    if (alreadyInList) {
      console.log("is in list");
      setItems(
        items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          }
          return {
            ...item,
            amount: newItem.amount,
          };
        })
      );
      return;
    }
    console.log("not in list");
    setItems([...items, newItem]);
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} handleAddItem={handleAddItem} items={items} />
    </>
  );
}
