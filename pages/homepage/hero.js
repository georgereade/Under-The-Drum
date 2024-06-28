import React, { useEffect } from "react";
import Image from "next/image";
import UtdBanner from "./components/utdBanner";
import BuyTickets from "./components/buyTickets";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center px-0 mx-0 pb-0 my-0 bg-utd-navy relative"
      id="home"
    >
      {" "}
      <div className="hidden xl:block main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5 bg-fixed bg-[url('/169poster6.jpg')] bg-cover bg-no-repeat bg-origin-padding">
        <Image
          src="/169poster3.jpg"
          className="w-screen h-full opacity-0"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
      </div>
      <div className="main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5">
        <Image
          src="/169poster.jpg"
          className="hidden sm:block md:hidden h-full"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
        <Image
          src="/PosterA3.jpg"
          className="block w-screen sm:hidden md:block xl:hidden"
          alt="Under The Drum"
          width="500"
          height="500"
          priority
        />
      </div>
      <div className="-translate-y-44 sm:-translate-y-96 lg:-translate-y-52 h-0 z-10">
        <motion.div
          className="rounded-xl md:w-full h-fit flex flex-col items-center bg-utd-navy md:bg-transparent md:backdrop-blur-xl px-4 md:px-12 shadow-lg shadow-utd-green border-2 border-utd-green"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-md md:text-2xl lg:text-3xl font-extrabold leading-loose text-center uppercase py-1 md:py-6">
            Saturday September 28th 2024
          </p>

          <BuyTickets />
        </motion.div>
      </div>
      <UtdBanner />
    </div>
  );
}
