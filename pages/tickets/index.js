import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTimer";
import { Inconsolata } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TicketPrices from "./components/ticketprices";
import Head from "next/head";
// import { Checkbox } from "@nextui-org/react";
import Link from "next/link";

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

  const [campingVisible, setCampingVisible] = useState(false);

  function handleCampingClick() {
    setCampingVisible(true);
  }

  return (
    <div
      className={`flex flex-col overflow-x-hidden dark items-center bg-utd-navy w-screen pb-12 min-h-full ${inconsolata.className} text-center bg-[url('/Drawings.png')] bg-cover bg-top bg-repeat-y bg-local`}
      id="tickets"
    >
      <Head>
        <title>Tickets | Under The Drum</title>
        <meta
          property="og:title"
          content="Tickets | Under The Drum"
          key="title"
        />
        <meta
          name="description"
          content="Tickets on sale now: £50 day tickets, £65 camping | A new music festival in the Antrim hills, featuring Joshua Burnside | 28th September 2024"
          key="desc"
        />
      </Head>
      <h1 className="font-extrabold text-2xl py-6 text-center leading-loose uppercase text-white">
        Under The Drum Tickets on sale
      </h1>
      <TicketPrices />
      <div className="md:flex flex-col items-center min-h-[330px] sm:min-h-[230px]">
        <div className="md:flex flex-row sm:w-auto sm:p-0 sm:m-0 bg-utd-navy">
          <form action="/api/checkout_sessions" method="POST">
            <section className="checkout-button-section mx-8 pb-4 sm:p-0 sm:ml-0">
              <button
                type="submit"
                role="link"
                className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
              >
                buy Day tickets
              </button>
            </section>
          </form>
          <div
            className={campingVisible ? "hidden-section" : "visible-section"}
          >
            {!campingVisible && (
              <section className="checkout-button-section mx-8 py-8 sm:p-0 sm:ml-0 ease-in-out transition-opacity duration-500">
                <button
                  type="button"
                  onClick={handleCampingClick}
                  role="button"
                  className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                >
                  buy camping tickets
                </button>
              </section>
            )}
          </div>
          <div
            className={campingVisible ? "visible-section" : "hidden-section"}
          >
            {campingVisible && (
              <div className="flex flex-col py-0">
                <form action="/api/checkout_sessions_camping" method="POST">
                  <section className="checkout-button-section mx-8 pt-8 pb-2 sm:p-0 sm:pb-2 sm:ml-0">
                    <button
                      type="submit"
                      role="link"
                      className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                    >
                      tent
                    </button>
                  </section>
                </form>
                <form action="/api/checkout_sessions_camping-van" method="POST">
                  <section className="checkout-button-section mx-8 py-2 sm:p-0 sm:ml-0">
                    <button
                      type="submit"
                      role="link"
                      className="text-2xl checkout-button rounded-md transition ease-in-out delay-10 hover:scale-110 hover:opacity-100 uppercase border-2 bg-utd-red border-utd-red hover:text-black hover:bg-utd-green hover:border-utd-green"
                    >
                      camper van
                    </button>
                    Each person staying at the venue overnight must have a
                    camping ticket. Please let us know if you are planning to
                    camp in a tent or camper van. This doesn&apos;t affect the
                    price but helps us a lot with planning, thank you!
                  </section>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-utd-navy">
        <p className="text-lg pt-16 text-gray-200">
          Payment processed through{" "}
          <span>
            <i
              className="fa-brands fa-cc-stripe text-green-600 text-3xl px-1 align-middle"
              alt="stripe"
            ></i>
          </span>
        </p>{" "}
        <p className="text-lg text-gray-200 py-2">
          Accepts all major cards and
          <span>
            <i
              className="fa-brands fa-google-pay text-3xl px-2 align-middle text-white"
              alt="google pay"
            ></i>
            <i
              className="fa-brands fa-cc-apple-pay text-3xl px-1 align-middle text-white"
              alt="apple pay"
            ></i>
          </span>
        </p>
      </div>
      <h3 className="text-xl pt-6 bg-utd-navy text-white">
        First entry on Saturday: 11am
      </h3>
      <h3 className="text-xl pb-12 bg-utd-navy text-white">
        Check out the{" "}
        <Link href="/info" className="text-utd-green border-b border-utd-green">
          Info page
        </Link>{" "}
        for more information
      </h3>
      <h3>
        <Link
          href="/ts&cs"
          className="text-utd-green border-b border-utd-green"
        >
          Terms & Conditions
        </Link>{" "}
      </h3>
      <div className="sm:hidden py-8">
        <CountdownTimer />
      </div>
    </div>
  );
}
