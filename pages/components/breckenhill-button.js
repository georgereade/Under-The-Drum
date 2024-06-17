import Link from "next/link";

export default function BreckenhillButton() {
  return (
    <div>
      <p className="leading-loose text-center pt-6">Venue</p>
      <section className="checkout-button-section">
        <Link href="https://breckenhill.co.uk/contact/">
          {" "}
          <button className="text-yellow-600 font-bold border-2 border-yellow-600 rounded mb-12 breckenhill-button">
            Breckenhill
          </button>
        </Link>
      </section>
    </div>
  );
}
