import Drinks from "/components/order-menu/drink-menu";
import Maindishes from "/components/order-menu/main-menu";

export default function OrderList() {
  return (
    <>
      <h1>Order Menu</h1>
      <h2>Hauptspeisen</h2>
      <Maindishes />
      <h2>Getränke</h2>
      <Drinks />
    </>
  );
}
