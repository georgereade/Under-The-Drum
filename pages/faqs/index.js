import BuyTickets from "../homepage/components/buyTickets";
import MailchimpForm from "../homepage/components/mailchimpForm";
import UtdBanner from "../homepage/components/utdBanner";

export default function FAQs() {
  return (
    <div className="flex flex-col items-center bg-utd-navy w-screen h-full py-12 px-3 text-center text-xl md:text-2xl leading-loose">
      <h1 className="text-5xl">FAQs</h1>
      <h2>What is Under The Drum?</h2>
      <p>
        A new music festival for 2024, taking place at Breckenhill in the Antrim
        Hills. Featuring folk, rock, pop and trad artists from across Ireland.
      </p>
      <h2 className="pt-4">How long will it last?</h2>
      <p>
        There will be an evening session on Friday evening, and camping is an
        option. The main day will be Saturday, with food and drink provided
        throughout the day.
      </p>
      <UtdBanner />
      <BuyTickets />
      <MailchimpForm />
    </div>
  );
}
