import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTImer";
import { Inconsolata } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TicketPrices from "./components/ticketprices";

const inconsolata = Inconsolata({ subsets: ["latin"] });

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
      className={`flex flex-col overflow-x-hidden dark items-center bg-utd-navy w-screen pb-12 min-h-full ${inconsolata.className} text-center bg-[url('/Drawings.png')] bg-cover bg-top bg-repeat-y bg-local`}
      id="tickets"
    >
      <p className="font-extrabold text-2xl py-6 text-center leading-loose uppercase text-white">
        Tickets on sale now
      </p>
      <TicketPrices />
      <div className="md:flex flex-row">
        <form action="/api/checkout_sessions" method="POST">
          <section className="checkout-button-section mx-8 pb-4">
            <button
              type="submit"
              role="link"
              className="text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 bg-utd-red border-utd-red hover:text-white hover:bg-utd-blue hover:border-utd-blue"
            >
              buy Day tickets
            </button>
          </section>
        </form>
        <form action="/api/checkout_sessions_camping" method="POST">
          <section className="checkout-button-section mx-8 pb-4">
            <button
              type="submit"
              role="link"
              className="text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 bg-utd-red border-utd-red  hover:text-white hover:bg-utd-blue hover:border-utd-blue"
            >
              buy camping tickets
            </button>
          </section>
        </form>
      </div>
      <div className="bg-utd-navy">
        <p className="text-sm pt-2 text-gray-200">
          Payment through{" "}
          <span>
            <i className="fa-brands fa-cc-stripe text-green-600 text-2xl px-1 align-middle"></i>
          </span>
        </p>{" "}
        <p className="text-sm text-gray-200 py-2">
          Accepts all major cards and
          <span>
            <i className="fa-brands fa-google-pay text-2xl px-2 align-middle text-white"></i>
            <i className="fa-brands fa-cc-apple-pay text-2xl px-1 align-middle text-white"></i>
          </span>
        </p>
      </div>
      <h3 className="text-xl pt-6 bg-utd-navy text-utd-blue">
        First entry on Saturday: 11am
      </h3>
      <h3 className="text-xl pb-12 bg-utd-navy text-utd-blue">
        Check out the FAQs for more information
      </h3>
      <div className="sm:hidden">
        <CountdownTimer />
      </div>
    </div>
  );
}
