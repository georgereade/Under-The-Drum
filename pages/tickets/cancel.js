import { Inconsolata } from "next/font/google";
const inconsolata = Inconsolata({ subsets: ["latin"] });
import ReturnButton from "./components/returnButton";

export default function Cancel() {
  return (
    <main
      className={`flex flex-col items-center place-content-center h-screen p-6 ${inconsolata.className}`}
    >
      <div>
        <p className="leading-loose text-center"> Payment cancelled.</p>
        <ReturnButton />
      </div>
    </main>
  );
}
