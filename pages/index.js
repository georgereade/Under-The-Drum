import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <p> Hey</p>
        <BuyTickets />
      </div>
    </main>
  );
}
