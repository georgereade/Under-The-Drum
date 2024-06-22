import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTImer";
import UtdBanner from "../homepage/components/utdBanner";
import { Montserrat, Bitter } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

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
      className={`flex flex-col dark items-center bg-utd-navy w-screen pb-12 h-screen ${bitter.className} text-center`}
      id="tickets"
    >
      <UtdBanner />
      <form action="/api/checkout_sessions" method="POST">
        <p className="font-extrabold text-2xl py-8 text-center leading-loose uppercase text-white">
          Tickets on sale now
        </p>
        <section className="checkout-button-section">
          <button
            type="submit"
            role="link"
            className="checkout-button bg-gray-300 uppercase text-white"
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
            className="checkout-button bg-gray-300 uppercase text-white"
          >
            camping tickets
          </button>
        </section>
      </form>
      <table className="md:w-1/4 w-screen text-center my-12">
        <thead>
          <tr>
            <th className="font-extrabold text-xl uppercase pt-3"></th>
            <th className="font-extrabold text-xl uppercase pt-3 text-white">
              Day Ticket
            </th>
            <th className="font-extrabold text-xl uppercase pt-3 text-white">
              Camping
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-extrabold text-xl uppercase pt-3 text-white">
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
            <td className="font-extrabold text-xl uppercase pt-3 text-white">
              Standard
            </td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£50</span>
            </td>
            <td className="font-extrabold text-xl uppercase pt-3">
              <span className="text-utd-blue">£60</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl">First entry on Saturday: 2pm</h3>
      <h3 className="text-xl pb-12">Check out the FAQs for more information</h3>
      <div className="sm:hidden">
        <CountdownTimer />
      </div>
    </div>
  );
}
