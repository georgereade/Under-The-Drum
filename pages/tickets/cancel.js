import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });
import ReturnButton from "../homepage/components/returnButton";

export default function Cancel() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${bitter.className}`}
    >
      <div>
        <p className="leading-loose text-center"> Payment cancelled.</p>
        <ReturnButton />
      </div>
    </main>
  );
}
