import { Product } from "@/components/Product";

export default function Maindishes() {
  const products = [
    {
      id: "1",
      name: "Schnitzel",
      price: 10.5,
    },
    {
      id: "2",
      name: "Spätzle",
      price: 9.5,
    },
    {
      id: "3",
      name: "Rindergulasch",
      price: 18.5,
    },
    {
      id: "4",
      name: "Sauerbraten",
      price: 14.5,
    },
  ];

  return (
    <ul>
      {products.map((product) => (
        <Product
          key={product}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </ul>
  );
}
