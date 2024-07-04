import { Inconsolata } from "next/font/google";
import Venue from "./venue";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function FAQs() {
  return (
    <div
      className={`flex flex-col dark items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${inconsolata.className} `}
    >
      <Venue />
    </div>
  );
}
