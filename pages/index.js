import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import Image from "next/image";
import Link from "next/link";

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
      <p className="leading-loose text-center pt-6">Venue:</p>
      <button
        role="link"
        className="text-yellow-200 font-bold border-2 border-yellow-200 rounded mb-12 breckenhill-button"
      >
        <Link href="https://breckenhill.co.uk/contact/">Breckenhill</Link>
      </button>
      <BuyTickets />
    </main>
  );
}
