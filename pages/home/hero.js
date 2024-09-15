import Image from "next/image";
import BuyTickets from "../../components/buyTickets";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center px-0 mx-0 pb-0 my-0 bg-utd-grey relative"
      id="home"
    >
      <div
        className="hidden xl:flex main-logo justify-center items-center w-full h-auto bg-[url('/utd-hero.jpg')] bg-contain bg-no-repeat bg-center"
        role="img"
        aria-label="background splash image"
        style={{ paddingBottom: "36.92%" }} // (1513 / 4099) * 100 = 36.92%
      >
        {/* Empty div to maintain aspect ratio */}
        <div className="w-full h-full"></div>
      </div>
      <div className="main-logo place-content-center w-screen h-4/5 sm:h-1/2 md:h-4/5">
        <Image
          src="/UTDPOSTER-FINAL2.jpg"
          className="hidden sm:block md:hidden h-full"
          alt="Under The Drum music festival Northern Ireland"
          width="2048"
          height="950"
        />
        <Image
          src="/UTDPOSTER-FINAL2.jpg"
          className="block w-screen sm:hidden md:block xl:hidden"
          alt="Under The Drum music festival Northern Ireland"
          width="500"
          height="500"
        />
      </div>
      <div className="w-screen bg-utd-navy py-8 lg:py-0 -z-0">
        <div className="xl:-translate-y-44 xl:h-0 sm:rounded-md border-1 w-screen bg-utd-navy md:w-full h-fit flex flex-col items-center sm:bg-transparent md:px-12">
          <BuyTickets />
        </div>
      </div>
    </div>
  );
}
