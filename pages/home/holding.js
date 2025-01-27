import MailchimpForm from "@/components/mailchimpForm";
import Socials from "./socials";
import Image from "next/image";
import MailchimpFormHolding from "@/components/mailchimpFormHolding";

export default function Holding() {
  return (
    <div
      className="flex flex-col h-screen max-h-screen w-screen justify-start sm:justify-between items-center px-0 mx-0 pb-0 my-0 relative bg-[url('/Satge.jpg')] bg-cover bg-no-repeat bg-bottom bg-black bg-opacity-35 bg-blend-darken"
      id="home"
    >
      <div className="flex flex-row place-content-center w-full pt-4">
        <Image
          src="/2025 logo colour.png"
          className=""
          alt="Under The Drum music festival Northern Ireland"
          width={350}
          height={350}
          sizes="(max-width: 768px) 80vw, 40vw"
        />
      </div>
      <div>
        <h1 className=" text-white font-extrabold text-2xl uppercase">
          2025 Info coming soon
          <span className="text-utd-blue opacity-0 animate-fadeIn1s">.</span>
          <span className="text-utd-purple opacity-0 animate-fadeIn2s">.</span>
          <span className=" text-utd-blue opacity-0 animate-fadeIn4s">.</span>
        </h1>
      </div>
      <div className="flex flex-row">
        <MailchimpFormHolding />
      </div>
      <div className="w-screen flex flex-row place-content-center">
        <Socials />
      </div>
    </div>
  );
}
