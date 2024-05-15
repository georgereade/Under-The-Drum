import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";

const inter = Inter({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex place-content-center h-screen w-screen p-24 ${inter.className}`}
    >
      <BuyTickets />
    </main>
  );
}
