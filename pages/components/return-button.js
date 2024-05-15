import Link from "next/link";

export default function ReturnButton() {
  return (
    <section className="checkout-button-section">
      <Link href="http://localhost:3000/">
        {" "}
        <button className="checkout-button w-full">
          Return to the homepage
        </button>
      </Link>
    </section>
  );
}
