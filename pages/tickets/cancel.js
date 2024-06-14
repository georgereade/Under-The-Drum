import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReturnButton from "../components/return-button";

export default function Cancel() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${inter.className}`}
    >
      <div>
        <p className="leading-loose text-center"> Payment cancelled.</p>
        <ReturnButton />
      </div>
    </main>
  );
}
