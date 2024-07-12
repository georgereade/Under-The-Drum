import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTimer";
import { Inconsolata } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TicketPrices from "./components/ticketprices";
import Head from "next/head";
import { Checkbox } from "@nextui-org/react";

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

  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`flex flex-col overflow-x-hidden dark items-center bg-utd-navy w-screen pb-12 min-h-full ${inconsolata.className} text-center bg-[url('/Drawings.png')] bg-cover bg-top bg-repeat-y bg-local`}
      id="tickets"
    >
      <Head>
        <title>Tickets | Under The Drum</title>
      </Head>
      <h1 className="font-extrabold text-2xl py-6 text-center leading-loose uppercase text-white">
        Tickets on sale now
      </h1>
      <TicketPrices />
      <div className="md:flex flex-col items-center">
        <div className="flex flex-row">
          {" "}
          <Checkbox
            defaultChecked={false}
            onChange={(e) => setChecked(e.target.checked)}
            onch
            className="my-12 p-0"
          >
            <span className="z-50 cursor-default select-none">
              I agree to the{" "}
            </span>
            <a
              href="/ts&cs"
              className="text-utd-red font-bold border-b border-utd-red"
            >
              Terms and Conditions.
            </a>
          </Checkbox>
        </div>

        <div className="md:flex flex-row">
          <form action="/api/checkout_sessions" method="POST">
            <section className="checkout-button-section mx-8 pb-4">
              <button
                type="submit"
                role="link"
                disabled={!checked}
                className={`text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 bg-utd-red border-utd-red hover:text-white hover:bg-utd-blue hover:border-utd-blue ${
                  !checked ? "opacity-50 cursor-not-allowed" : ""
                }`}
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
                disabled={!checked}
                className={`text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 bg-utd-red border-utd-red hover:text-white hover:bg-utd-blue hover:border-utd-blue ${
                  !checked ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                buy camping tickets
              </button>
            </section>
          </form>
        </div>
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
        Check out the{" "}
        <a href="/info" className="text-utd-green border-b border-utd-green">
          Info page
        </a>{" "}
        for more information
      </h3>
      <div className="sm:hidden">
        <CountdownTimer />
      </div>
    </div>
  );
}
