import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Instroke</h1>
      <Image
        alt="Restaurant Picture"
        src="/restaurant-image.jpg"
        width={184}
        height={184}
      ></Image>
    </div>
  );
}
