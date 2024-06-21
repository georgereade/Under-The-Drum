import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import ReturnButton from "../homepage/components/returnButton";

export default function Success() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${bitter.className}`}
    >
      <div className="text-center leading-loose">
        <p>Payment successful, thanks!</p>
        <p>Your ticket will be emailed to you shortly.</p>

        <ReturnButton />
      </div>
    </main>
  );
}
