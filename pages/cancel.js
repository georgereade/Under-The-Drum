import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Cancel() {
    return (
      <main
        className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
          <p> Payment cancelled.</p>
        </div>
      </main>
    );
  }