import Link from "next/link";

export default function ReturnButton() {
  return (
    <section className="checkout-button-section">
      <Link href="/">
        {" "}
        <button className="checkout-button w-full">
          Return to the homepage
        </button>
      </Link>
    </section>
  );
}
