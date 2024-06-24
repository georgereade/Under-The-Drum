import BuyTickets from "../homepage/components/buyTickets";
import MailchimpForm from "../homepage/components/mailchimpForm";
import UtdBanner from "../homepage/components/utdBanner";
import { Montserrat, Bitter } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

export default function FAQs() {
  return (
    <div
      className={`flex flex-col dark items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${bitter.className}`}
    >
      <UtdBanner />
      <div className="md:w-4/5 pb-8">
        {" "}
        <h1 className="text-5xl py-6">FAQs</h1>
        <h2>What is Under The Drum?</h2>
        <p className="text-md">
          A new music festival for 2024, taking place at Breckenhill in the
          Antrim Hills, featuring folk, rock, pop and trad artists from across
          Ireland. The festival takes its name from the surrounding Drumadarragh
          hills which overlook the countryside towards Belfast.
        </p>
        <h2 className="pt-4">When is it taking place?</h2>
        <p className="text-md">
          The festival is on Saturday 28th of September, with optional camping.
          Events will start early on Saturday, and a variety of food and drink
          options will be available for purchase throughout the day.
        </p>
        <h2 className="pt-4">How can I buy tickets?</h2>
        <p className="text-md">
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
