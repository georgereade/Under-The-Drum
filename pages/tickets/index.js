import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTImer";
import Image from "next/image";
import UtdBanner from "../homepage/components/utdBanner";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function Tickets() {
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
    <div
      className="flex flex-col items-center bg-utd-navy w-screen pb-12 h-screen place-content-center"
      id="tickets"
    >
      <UtdBanner />
      <form action="/api/checkout_sessions" method="POST">
        <p className="font-extrabold text-2xl text-center leading-loose uppercase">
          Tickets
        </p>
        <section className="checkout-button-section">
          <button
            type="submit"
            role="link"
            className="checkout-button bg-gray-300 cursor-not-allowed uppercase"
            disabled
          >
            On Sale Soon
          </button>
        </section>
      </form>
      <p className="font-extrabold text-2xl text-center leading-loose uppercase pt-3">
        Earlybirds <span className="text-utd-blue">£40</span>{" "}
      </p>{" "}
      <p className="font-extrabold text-2xl text-center leading-loose uppercase pt-3">
        Standard <span className="text-utd-blue">£50</span>
      </p>
      <CountdownTimer />
      <UtdBanner />
    </div>
  );
}
