import { Inconsolata } from "next/font/google";
const inconsolata = Inconsolata({ subsets: ["latin"] });
import ReturnButton from "./components/returnButton";

export default function Success() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${inconsolata.className}`}
    >
      <div className="text-center leading-loose">
        <p>Payment successful, thanks!</p>
        <p>Your ticket will be emailed to you shortly.</p>

        <ReturnButton />
      </div>
    </main>
  );
}
