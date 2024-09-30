"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Inconsolata } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TicketPrices from "./components/ticketprices";
import Head from "next/head";
import TicketLower from "./components/TicketLowerSection";
import DayTickets from "./DayTickets";
import CampingTickets from "./CampingTickets";

const inconsolata = Inconsolata({ subsets: ["latin"] });

// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Tickets() {
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
        Under The Drum Tickets
      </h1>
      <p>Tickets are no longer on sale for 2024.</p>
      <p>Keep an eye out for information about next year!</p>
      <TicketPrices />

      <div className="md:flex flex-col items-center min-h-[330px] sm:min-h-[230px]">
        <div className="md:flex flex-row sm:w-auto sm:p-0 sm:m-0 bg-utd-navy">
          <DayTickets />
          <CampingTickets />
        </div>
      </div>

      <TicketLower />
    </div>
  );
}
