import BuyTickets from "../homepage/components/buyTickets";
import MailchimpForm from "../homepage/components/mailchimpForm";
import { Inconsolata } from "next/font/google";
import { useState } from "react";

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
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${inconsolata.className} bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-local`}
    >
      <div className="md:w-4/5 bg-utd-navy pb-8 md:px-16">
        {" "}
        <h1 className="text-5xl py-6">Info</h1>
        <h2
          onClick={() => toggleVisibility(0)}
          className="cursor-pointer border-b"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>What is Under The Drum?
        </h2>
        <p
          className={`text-md transition-max-height duration-500 ease-in-out overflow-hidden ${
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
          className="cursor-pointer pt-4 border-b"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>When is it taking place?
        </h2>
        <p
          className={`text-md transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(1) ? "max-h-96" : "max-h-0"
          }`}
        >
          The festival is on Saturday 28th of September, with optional camping.
          Events will start early on Saturday, and a variety of food and drink
          options will be available for purchase throughout the day.
        </p>
        <h2
          onClick={() => toggleVisibility(2)}
          className="cursor-pointer pt-4 border-b"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>How can I buy tickets?
        </h2>
        <p
          className={`text-md transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndices.includes(2) ? "max-h-96" : "max-h-0"
          }`}
        >
          Tickets are available to purchase securely through Stripe on the
          website. You may use debit or credit cards, bank transfer or Google
          Pay and Apple Pay. Earlybird tickets are available until X and will
          cost £x, standard tickets will then go on sale for £x.
        </p>
      </div>

      <BuyTickets />
      <MailchimpForm />
    </div>
  );
}
