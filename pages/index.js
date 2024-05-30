import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import Image from "next/image";
import Venue from "./components/venue";
import Contact from "./components/contact";
import Artists from "./components/artists";

const inter = Inter({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center h-screen w-screen p-6 ${inter.className}`}
    >
      <div className="main-logo">
        {" "}
        <Image
          src="/main-logo.png"
          className="block dark:hidden"
          alt="Under The Drum"
          width="400"
          height="400"
        />
        <Image
          src="/main-logo-white.png"
          className="hidden dark:block"
          alt="Under The Drum"
          width="400"
          height="400"
        />
      </div>

      <h1 className="font-extrabold text-4xl pt-4">Under The Drum</h1>
      <p className="leading-loose text-center">
        Saturday September 28th 2024
        <br />A weekend of music in the Antrim hills
      </p>

      <BuyTickets />
      <Artists />
      <Venue />
      <Contact />
    </main>
  );
}
