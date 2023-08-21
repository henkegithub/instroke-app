import ShoppingCart from "/components/shopping-cart";
import Drinks from "/components/order-menu/drink-menu";
import Maindishes from "/components/order-menu/main-menu";

export default function OrderList({ handleAmountChange, items }) {
  return (
    <>
      <h1>Order Menu</h1>
      <h2>Hauptspeisen</h2>
      <Maindishes handleAmountChange={handleAmountChange} items={items} />
      <h2>Getränke</h2>
      <Drinks handleAmountChange={handleAmountChange} items={items} />
      <ShoppingCart />
    </>
  );
}
