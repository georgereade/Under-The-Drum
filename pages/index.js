import { Nunito } from "next/font/google";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import BuyTickets from "./tickets/buy";
import Venue from "./homepage/venue";
import Contact from "./homepage/contact";
import Artists from "./homepage/artists";
import Hero from "./homepage/hero";
import MailchimpForm from "./components/mailchimpForm";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nunito = Nunito({ subsets: ["latin"] });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen pb-6 font-nunito bg-utd-navy ${nunito.className}`}
    >
      <Hero />
      <MailchimpForm />
      <Artists />
      <BuyTickets />
      <Venue />
      <Contact />
      <SpeedInsights />
    </main>
  );
}
