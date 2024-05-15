import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReturnButton from "./components/return-button";

export default function Cancel() {
  return (
    <main
      className={`flex place-content-center h-screen p-24 ${inter.className}`}
    >
      <div>
        <p> Payment cancelled.</p>
        <ReturnButton />
      </div>
    </main>
  );
}
