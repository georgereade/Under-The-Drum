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
      <div className="hidden xl:block main-logo place-content-center w-screen bg-[url('/utd-hero.jpg')] bg-cover bg-no-repeat bg-origin-padding">
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
      <div className="w-screen sm:-translate-y-96 lg:-translate-y-48 md:h-0 -z-0">
        <motion.div
          className=" sm:rounded-md border-1 w-screen bg-utd-navy md:w-full h-fit flex flex-col items-center sm:bg-transparent md:px-12 p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <BuyTickets />
        </motion.div>
      </div>
      {/* <UtdBanner /> */}
    </div>
  );
}
