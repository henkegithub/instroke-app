import { useState } from "react";
import GlobalStyle from "../styles";

export const menuItems = [
  {
    id: "1",
    name: "Schnitzel",
    price: 10.5,
    type: "food",
  },
  {
    id: "2",
    name: "Spätzle",
    price: 9.5,
    type: "food",
  },
  {
    id: "3",
    name: "Rindergulasch",
    price: 18.5,
    type: "food",
  },
  {
    id: "4",
    name: "Sauerbraten",
    price: 14.5,
    type: "food",
  },
  {
    id: "5",
    name: "Apfelschorle",
    price: 2.5,
    type: "drink",
  },
  {
    id: "6",
    name: "Johannisbeersaft",
    price: 2.5,
    type: "drink",
  },
  {
    id: "7",
    name: "Zitroneneistee",
    price: 3.5,
    type: "drink",
  },
  {
    id: "8",
    name: "Pfirsicheistee",
    price: 3.5,
    type: "drink",
  },
];

export default function App({ Component, pageProps }) {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (event) => {
    setSelectedTable(event.target.value);
  };

  const [items, setItems] = useState([]);
  function handleAmountChange(id, amount) {
    const alreadyInList = items.find((item) => item.id === id);
    if (alreadyInList) {
      if (amount === 0) {
        setItems(items.filter((item) => item.id !== id));
        return;
      }
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
    const menu = menuItems.find((item) => item.id === id);
    setItems([...items, { ...menu, amount: Math.max(amount, 0) }]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAmountChange={handleAmountChange}
        items={items}
        handleTableSelect={handleTableSelect}
        selectedTable={selectedTable}
      />
    </>
  );
}
