import { Nunito } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import Venue from "./components/venue";
import Contact from "./components/contact";
import Artists from "./components/artists";
import Hero from "./components/hero";

const nunito = Nunito({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center h-screen w-screen pb-6 font-nunito bg-utd-navy ${nunito.className}`}
    >
      <Hero />
      <Artists />
      <BuyTickets />
      <Venue />
      <Contact />
    </main>
  );
}
