import React from "react";
import Image from "next/image";
import UtdBanner from "./components/utdBanner";
import BuyTickets from "./components/buyTickets";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center px-0 mx-0 pb-0 my-0 bg-utd-navy relative"
      id="hero"
    >
      <div className="main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5 ">
        <Image
          src="/169poster3.jpg"
          className="hidden xl:block w-screen -my-6"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
        <Image
          src="/169poster.jpg"
          className="hidden sm:block xl:hidden -mt-6 object-contain"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
        <Image
          src="/PosterA3.jpg"
          className="w-screen sm:hidden lg:hidden"
          alt="Under The Drum"
          width="500"
          height="500"
          priority
        />
      </div>
      <div className="md:w-full flex flex-col items-center bg-utd-navy md:px-12 h-full">
        {/* <h1
          className={`font-light text-4xl md:text-5xl pt-4 leading-loose text-center uppercase ${roboto.className}`}
        >
          UNDER THE DRUM
        </h1>
        <h2 className="lowercase italic text-xl md:text-2xl">
          a music festival in the Antrim Hills
        </h2> */}
        <p className="text-xl md:text-2xl font-extrabold leading-loose text-center uppercase py-1 md:py-6">
          Saturday September 28th 2024
        </p>
        <BuyTickets />
      </div>

      <UtdBanner />
    </div>
  );
}
