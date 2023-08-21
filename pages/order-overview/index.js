import Link from "next/link";

export default function OrderOverview({ items }) {
  function getTotalPrice(items) {
    return items.reduce((memo, item) => memo + item.price * item.amount, 0);
  }
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}€</p>
              <p>{item.amount}</p>
            </li>
          );
        })}
      </ul>
      <h1>Total Price:</h1>
      {getTotalPrice(items)} €<p>Select Table:</p>
      <input type="number" step="1" min="1" max="100"></input>
      <Link href="/order-success">Checkout!</Link>
    </>
  );
}
