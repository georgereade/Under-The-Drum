import { Inconsolata } from "next/font/google";
import Head from "next/head";
import { Image } from "@nextui-org/react";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Map() {
  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left text-xl md:text-2xl leading-loose ${inconsolata.className} overflow-hidden sm:bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-local`}
    >
      <Head>
        <title>Map | Under The Drum</title>
      </Head>
      <Image
        src="Map.png"
        className="mx-auto py-4"
        alt="A map of the festival site"
      ></Image>
      <Image
        src="utd-logo-mould.png"
        className="w-1/2 sm:w-1/4 mx-auto py-4"
        alt="Under The Drum logo"
      ></Image>
    </div>
  );
}
