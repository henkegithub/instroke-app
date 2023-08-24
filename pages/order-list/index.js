import ShoppingCart from "/components/shopping-cart";
import Drinks from "/components/order-menu/drink-menu";
import Maindishes from "/components/order-menu/main-menu";
import OrderOverview from "../order-overview";
import Backdrop from "@/components/slide-drawer/backdrop/index.js";
import { useState } from "react";

export default function OrderList({ handleAmountChange, items }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop close={backdropClickHandler} />;
  }

  return (
    <>
      <h1>Order Menu</h1>
      <h2>Hauptspeisen</h2>
      <Maindishes handleAmountChange={handleAmountChange} items={items} />
      <h2>Getränke</h2>
      <Drinks handleAmountChange={handleAmountChange} items={items} />
      <OrderOverview items={items} show={drawerOpen} />
      {backdrop}
      <ShoppingCart toggle={drawerToggleClickHandler} />
    </>
  );
}
