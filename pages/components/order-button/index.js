import Link from "next/link";

export default function OrderButton() {
  return (
    <div>
      <button>
        <Link href="/order-list">Order Here!</Link>
      </button>
    </div>
  );
}
