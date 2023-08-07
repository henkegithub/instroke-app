import Drinks from "../components/order-menu/drink-menu";
import Maindishes from "../components/order-menu/main-menu";

export default function OrderList() {
  return (
    <>
      <h1>Order Menu</h1>
      <form>
        <h3>Hauptspeisen</h3>
        <ul>
          <Maindishes />
        </ul>
        <h3>Getränke</h3>
        <ul>
          <Drinks />
        </ul>
      </form>
    </>
  );
}
