import GlobalStyle from "../styles";

export const maindishes = [
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

export const drinks = [
  {
    id: "1",
    name: "Apfelschorle",
    price: 2.5,
  },
  {
    id: "2",
    name: "Johannisbeersaft",
    price: 2.5,
  },
  {
    id: "3",
    name: "Zitroneneistee",
    price: 3.5,
  },
  {
    id: "4",
    name: "Pfirsicheistee",
    price: 3.5,
  },
];

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
