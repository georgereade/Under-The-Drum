import React, { useEffect } from "react";
import Image from "next/image";
import UtdBanner from "./components/utdBanner";
import BuyTickets from "./components/buyTickets";

export default function Hero() {
  useEffect(() => {
    const headers = document.getElementsByClassName("fade-in");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.5 }
    );

    Array.from(headers).forEach((element) => {
      observer.observe(element);
    });

    return () => {
      Array.from(headers).forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center px-0 mx-0 pb-0 my-0 bg-utd-navy relative"
      id="hero"
    >
      {" "}
      <div className="hidden xl:block main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5 bg-fixed bg-[url('/169poster2.jpg')] bg-cover bg-no-repeat pt-16 bg-origin-padding">
        <Image
          src="/169poster3.jpg"
          className="w-screen h-full -scroll-mt-12 opacity-0"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
      </div>
      <div className="main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5">
        <Image
          src="/169poster.jpg"
          className="hidden sm:block xl:hidden h-full"
          alt="Under The Drum"
          width="2048"
          height="950"
          priority
        />
        <Image
          src="/PosterA3.jpg"
          className="block w-screen sm:hidden lg:hidden"
          alt="Under The Drum"
          width="500"
          height="500"
          priority
        />
      </div>
      <div className="md:w-screen flex flex-col items-center bg-utd-navy md:px-12 h-full z-10">
        <p className="text-xl md:text-2xl font-extrabold leading-loose text-center uppercase py-1 md:py-6 fade-in">
          Saturday September 28th 2024
        </p>
        <div className="fade-in pb-2">
          <BuyTickets />
        </div>
      </div>
      <UtdBanner />
    </div>
  );
}
