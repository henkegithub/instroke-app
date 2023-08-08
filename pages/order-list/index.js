import Drinks from "/components/order-menu/drink-menu";
import Maindishes from "/components/order-menu/main-menu";

export default function OrderList() {
  return (
    <>
      <h1>Order Menu</h1>
      <form>
        <ul>
          <h2>Hauptspeisen</h2>
          <Maindishes />
        </ul>
        <ul>
          <h2>Getränke</h2>
          <Drinks />
        </ul>
      </form>
    </>
  );
}
