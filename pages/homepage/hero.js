import React from "react";
import Image from "next/image";
import CountdownTimer from "../components/countdownTImer";

export default function Hero() {
  return (
    <div className="flex flex-col items-center pb-6 my-0 bg-utd-navy">
      <div className="w">
        {" "}
        <Image
          src="/Banner.jpg"
          className="md:w-screen w-dvw"
          alt="Under The Drum"
          width="2500"
          height="998"
        />
      </div>

      <div className="main-logo px-0 mx-0 place-content-center md:hidden">
        {" "}
        {/* <Image
          src="/Vector LOGO - MAIN.jpg"
          className="block dark:hidden"
          alt="Under The Drum"
          width="400"
          height="400"
        /> */}
        <Image
          src="/UTDLogoWhite.png"
          className=""
          alt="Under The Drum"
          width="400"
          height="400"
        />
      </div>
      <Image
        src="/Banner1.png"
        className="md:hidden w-dvw"
        alt="Under The Drum"
        width="2500"
        height="998"
      />
      {/* <h1 className="font-extrabold text-4xl pt-4">Under The Drum</h1> */}
      <h1 className="font-extrabold text-2xl md:text-4xl pt-4 leading-loose text-center uppercase">
        A weekend of music in the Antrim hills
      </h1>
      <p className="leading-loose text-center uppercase">
        Saturday September 28th 2024
      </p>
      <CountdownTimer />
    </div>
  );
}
