export default function Checkout({ selectedTable }) {
  return (
    <div>
      <h2>Checkout Page</h2>
      <p>Congratulations!</p>
      <p>Your Order will be delivered shortly to:</p>
      <p>Table Nr.: {selectedTable}</p>
    </div>
  );
}
