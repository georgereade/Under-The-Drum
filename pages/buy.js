import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function BuyTickets() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-utd-navy w-screen pb-12">
      {" "}
      <form action="/api/checkout_sessions" method="POST">
        <p className="font-extrabold text-2xl text-center leading-loose">
          Tickets:
        </p>
        <section className="checkout-button-section">
          <button
            type="submit"
            role="link"
            className="checkout-button bg-gray-300 cursor-not-allowed"
            disabled
          >
            On Sale Soon
          </button>
        </section>
      </form>
    </div>
  );
}
