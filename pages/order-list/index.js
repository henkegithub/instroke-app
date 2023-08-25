import ShoppingCart from "/components/shopping-cart";
import Drinks from "/components/order-menu/drink-menu";
import Maindishes from "/components/order-menu/main-menu";
import OrderOverview from "../order-overview";
import Backdrop from "@/components/back-drop/index.js";
import BackButton from "@/components/back-button";
import { useState } from "react";

export default function OrderList({
  handleAmountChange,
  items,
  handleTableSelect,
  selectedTable,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <h1>Order Menu</h1>
      <h2>Hauptspeisen</h2>
      <Maindishes handleAmountChange={handleAmountChange} items={items} />
      <h2>Getränke</h2>
      <Drinks handleAmountChange={handleAmountChange} items={items} />
      <OrderOverview
        items={items}
        show={drawerOpen}
        handleTableSelect={handleTableSelect}
        selectedTable={selectedTable}
      />
      {drawerOpen && <Backdrop close={backdropClickHandler} />}
      <ShoppingCart toggle={drawerToggleClickHandler} />
      <BackButton />
    </>
  );
}
