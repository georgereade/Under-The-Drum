import { Inter } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./buy";
import Image from "next/image";
import BreckenhillButton from "./components/breckenhill-button";
import Contact from "./components/contact";
import MailchimpForm from "./components/mailchimpForm";

const inter = Inter({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-full w-screen p-6 ${inter.className}`}
    >
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
      <h1 className="font-extrabold pt-4">Under The Drum</h1>
      <p className="leading-loose text-center">
        Saturday September 28th 2024
        <br />
        An eclectic weekend of music in the Antrim hills
      </p>
      <BreckenhillButton />
      <BuyTickets />
      <MailchimpForm />
      <Contact />
    </main>
  );
}
