import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import Image from "next/image";
import BreckenhillButton from "./components/breckenhill-button";
import Contact from "./components/contact";

const inter = Inter({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen w-screen p-6 ${inter.className}`}
    >
      <Image
        src="/drum-logo.jpeg"
        className=""
        alt="Under The Drum"
        width="300"
        height="300"
      />
      <h1 className="font-extrabold pt-4">Under The Drum</h1>
      <p className="leading-loose text-center">
        Saturday September 28th 2024
        <br />
        An eclectic weekend of music in the Antrim hills
      </p>
      <BreckenhillButton />
      <BuyTickets />
      <Contact />
    </main>
  );
}
