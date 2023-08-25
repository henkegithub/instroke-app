export default function Checkout({ totalPrice, selectedTable }) {
  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Total Price: {totalPrice} €</p>
      <p>Selected Table: {selectedTable}</p>
    </div>
  );
}
