import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReturnButton from "./components/return-button";

export default function Success() {
  return (
    <main
      className={`flex place-content-center h-screen p-24 ${inter.className}`}
    >
      <div className="text-justify">
        <p>Payment successful, thanks!</p>
        <p>Your ticket will be emailed to you shortly.</p>

        <ReturnButton />
      </div>
    </main>
  );
}
