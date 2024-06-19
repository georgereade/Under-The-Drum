import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTImer";
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
      className="flex flex-col items-center bg-utd-navy w-screen pb-12 h-screen"
      id="tickets"
    >
      <UtdBanner />
      <form action="/api/checkout_sessions" method="POST">
        <p className="font-extrabold text-2xl text-center leading-loose uppercase">
          Tickets on sale now
        </p>
        <section className="checkout-button-section">
          <button
            type="submit"
            role="link"
            className="checkout-button bg-gray-300 uppercase"
          >
            Day tickets
          </button>
        </section>
      </form>
      <form action="/api/checkout_sessions_camping" method="POST">
        <section className="checkout-button-section py-6">
          <button
            type="submit"
            role="link"
            className="checkout-button bg-gray-300 uppercase"
          >
            camping tickets
          </button>
        </section>
      </form>
      {/* <p className="font-extrabold text-2xl text-center leading-loose uppercase pt-3">
        Earlybirds <span className="text-utd-blue">£40</span>{" "}
      </p>{" "}
      <p className="font-extrabold text-2xl text-center leading-loose uppercase pt-3 pb-12">
        Standard <span className="text-utd-blue">£50</span>
      </p> */}
      <h3 className="text-xl">First entry on Saturday: 2pm</h3>
      <h3 className="text-xl">Check out the FAQs for more information</h3>
      <table className="md:w-1/4 text-center my-12">
        <thead>
          <tr>
            <th className="font-extrabold text-xl uppercase pt-3"></th>
            <th className="font-extrabold text-xl uppercase pt-3">
              Day Ticket
            </th>
            <th className="font-extrabold text-xl uppercase pt-3">Camping</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-extrabold text-xl uppercase pt-3">
              Earlybirds
            </td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£40</span>
            </td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£50</span>
            </td>
          </tr>
          <tr>
            <td className="font-extrabold text-xl uppercase pt-3">Standard</td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£50</span>
            </td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£60</span>
            </td>
          </tr>
        </tbody>
      </table>
      <CountdownTimer />
    </div>
  );
}
