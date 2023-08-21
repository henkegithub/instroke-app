import BackButton from "@/components/back-button";

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
      {getTotalPrice(items)} €
    </>
  );
}
