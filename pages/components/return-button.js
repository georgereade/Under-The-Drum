import Link from "next/link";

export default function ReturnButton() {
  return (
    <section className="checkout-button-section">
      <Link href="http://localhost:3000/" className="checkout-button">
        Return to the homepage
      </Link>
    </section>
  );
}
