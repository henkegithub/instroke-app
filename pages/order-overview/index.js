export default function OrderOverview({ items }) {
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
      {items.map((item) => item.price * item.amount).reduce((a, b) => a + b)} €
    </>
  );
}
