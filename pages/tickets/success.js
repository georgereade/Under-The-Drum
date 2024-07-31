import { Inconsolata } from "next/font/google";
const inconsolata = Inconsolata({ subsets: ["latin"] });
import ReturnButton from "./components/returnButton";

export default function Success() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${inconsolata.className}`}
    >
      <div className="text-center leading-loose">
        <p>Payment successful, thank you!</p>
        <p>
          You will receive a receipt from Stripe. Tickets will be emailed to you
          closer to the event.
        </p>
        <p>
          If you need to change the names on tickets, or have any other issues,
          please do get in touch.
        </p>
      </div>
      <ReturnButton />
    </main>
  );
}
