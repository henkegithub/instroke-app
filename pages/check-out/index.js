export default function Checkout({ selectedTable }) {
  return (
    <div>
      <h1>Checkout Page</h1>
      <p>Congratulations!</p>
      <p>Your Order will be delivered shortly to:</p>
      <p>Table Nr.: {selectedTable}</p>
    </div>
  );
}
