import { Product } from "@/components/Product";
export default function Drinks() {
  const products = [
    {
      name: "Apfelschorle",
      price: 2.5,
    },
    {
      name: "Johannisbeersaft",
      price: 2.5,
    },
    {
      name: "Zitroneneistee",
      price: 3.5,
    },
    {
      name: "Pfirsicheistee",
      price: 3.5,
    },
  ];

  return (
    <ul>
      {products.map((product) => (
        <Product key={product} name={product.name} price={product.price} />
      ))}
    </ul>
  );
}
