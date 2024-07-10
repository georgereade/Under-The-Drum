import BuyTickets from "../homepage/components/buyTickets";
import MailchimpForm from "../homepage/components/mailchimpForm";
import { Inconsolata } from "next/font/google";
import { useState } from "react";
import Head from "next/head";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Info() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleVisibility = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left leading-loose ${inconsolata.className} sm:bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-fixed`}
    >
      <Head>
        <title>Info | Under The Drum</title>
      </Head>
      <div className="md:w-4/5 bg-utd-navy pb-8 md:px-16">
        {" "}
        <h1 className="text-5xl py-6">Info</h1>
        <h2
          onClick={() => toggleVisibility(0)}
          className="cursor-pointer border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>What is Under The Drum?
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(0) ? "max-h-96" : "max-h-0"
          }`}
        >
          A new music festival for 2024, taking place at Breckenhill in the
          Antrim Hills, featuring folk, rock, pop and trad artists from across
          Ireland. The festival takes its name from the surrounding Drumadarragh
          hills which overlook the countryside towards Belfast.
        </p>
        <h2
          onClick={() => toggleVisibility(1)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>When is it?
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(1) ? "max-h-96" : "max-h-0"
          }`}
        >
          Saturday 28th of September, with optional camping. Gates will open
          from 11am on Saturday, with last departures by 1pm on Sunday 29th.
        </p>
        <h2
          onClick={() => toggleVisibility(2)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Where is it?
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(2) ? "max-h-96" : "max-h-0"
          }`}
        >
          The festival is taking place at Breckenhill, at 45 Breckenhill Road,
          Doagh, Ballyclare, Co.Antrim, BT39 0TB. Directions can be found on the
          Location page. We are located around 30 mins drive from Belfast and 7
          mins from Ballyclare.
        </p>
        <h2
          onClick={() => toggleVisibility(3)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>How can I buy tickets?
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(3) ? "max-h-96" : "max-h-0"
          }`}
        >
          Tickets are available to purchase securely through Stripe on this
          website only (see TICKETS). You may use debit or credit cards, bank
          transfer or Google Pay and Apple Pay. Earlybird tickets are available
          for the first two weeks starting from £45. Standard tickets will then
          go on sale starting from £50.
        </p>
        <h2
          onClick={() => toggleVisibility(4)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Parking
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(4) ? "max-h-96" : "max-h-0"
          }`}
        >
          Parking is available on site, and cars may be left overnight for those
          camping.
        </p>
        <h2
          onClick={() => toggleVisibility(5)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Food and Drink
        </h2>
        <p
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(5) ? "max-h-96" : "max-h-0"
          }`}
        >
          Food will be available for purchase throughout the weekend, with a
          variety of lunch and dinner options. Breakfast will also be available
          on the Sunday morning. Vegan and vegetarian options will be on offer.
        </p>
        <h2
          onClick={() => toggleVisibility(6)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Facilities
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(6) ? "max-h-96" : "max-h-0"
          }`}
        >
          YES:
          <ul className="list-disc pl-8">
            <li>Toilets</li>
            <li>Drinking Water</li>
            <li>First aid</li>
            <li>Showers</li>
            <li>4G signal</li>
          </ul>
          NO:
          <ul className="list-disc pl-8">
            <li>ATM</li>
            <li>WiFI</li>
            <li>Phone charging</li>
          </ul>
        </div>
      </div>

      <BuyTickets />
      <MailchimpForm />
    </div>
  );
}
