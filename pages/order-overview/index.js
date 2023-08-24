export default function OrderOverview({ items, show }) {
  function getTotalPrice(items) {
    return items.reduce((memo, item) => memo + item.price * item.amount, 0);
  }

  const drawerClasses = ["side-drawer"];

  if (show) {
    drawerClasses.push("open");
  }

  return (
    <>
      <div className={drawerClasses.join(" ")}>
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
      </div>
    </>
  );
}
