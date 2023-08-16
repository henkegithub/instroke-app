export default function OrderOverview() {
  return (
    // i want to select the data displayed on the order menu
    //data i need is name price and amount selected
    // display that and add a total price sum
    // how can i make this work??
    <>
      <ul>
        <li>{products.name}</li>
        <li>10.50€</li>
        <li>2</li>
        <li>Item2</li>
        <li>9.50€</li>
        <li>1</li>
      </ul>
      <h1>Total:</h1>
      <p>30.50€</p>
    </>
  );
}
