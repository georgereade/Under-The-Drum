import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CountdownTimer from "../homepage/components/countdownTImer";
import UtdBanner from "../homepage/components/utdBanner";
import { Montserrat, Bitter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TicketPrices from "./components/ticketprices";
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
      className={`flex flex-col dark items-center bg-utd-navy w-screen pb-12 min-h-full ${bitter.className} text-center`}
      id="tickets"
    >
      <UtdBanner />
      <TicketPrices />
      <p className="font-extrabold text-2xl py-6 text-center leading-loose uppercase text-white">
        Tickets on sale now
      </p>
      <div className="md:flex flex-row">
        <form action="/api/checkout_sessions" method="POST">
          <section className="checkout-button-section mx-8 pb-4">
            <button
              type="submit"
              role="link"
              className="text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 text-utd-green border-utd-green hover:text-white hover:bg-utd-red hover:border-utd-red"
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
              className="text-2xl checkout-button rounded-xl transition ease-in-out delay-10 hover:scale-110 uppercase border-2 text-utd-green border-utd-green hover:text-white hover:bg-utd-red hover:border-utd-red"
            >
              buy camping tickets
            </button>
          </section>
        </form>
      </div>
      <div>
        <p className="text-sm pt-2 text-gray-200">
          Payment through{" "}
          <span>
            <i class="fa-brands fa-cc-stripe text-green-600 text-2xl px-1 align-middle"></i>
          </span>
        </p>{" "}
        <p className="text-sm text-gray-200 py-2">
          All major cards and
          <span>
            <i class="fa-brands fa-google-pay text-2xl px-2 align-middle text-white"></i>
            <i class="fa-brands fa-cc-apple-pay text-2xl px-1 align-middle text-white"></i>
          </span>
        </p>
      </div>
      <h3 className="text-xl pt-6">First entry on Saturday: 2pm</h3>
      <h3 className="text-xl pb-12">Check out the FAQs for more information</h3>
      <div className="sm:hidden">
        <CountdownTimer />
      </div>
    </div>
  );
}
