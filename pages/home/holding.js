import MailchimpForm from "@/components/mailchimpForm";
import Socials from "./socials";
import Image from "next/image";
import MailchimpFormHolding from "@/components/mailchimpFormHolding";

export default function Holding() {
  return (
    <div
      className="flex flex-col h-screen max-h-screen w-screen justify-start sm:justify-between items-center relative bg-[url('/Satge.jpg')] bg-cover bg-no-repeat bg-center sm:bg-bottom"
      id="home"
    >
      <div>
        <div className="flex flex-row place-content-center w-full pt-8">
          <Image
            src="/2025 logo colour.png"
            className=" w-3/5 sm:w-[350px]"
            alt="Under The Drum music festival Northern Ireland"
            width={350}
            height={350}
            sizes="(max-width: 768px) 80vw, 50vw"
          />
        </div>
        <div className="flex flex-col items-center py-4">
          <h1 className="text-2xl text-utd-blue font-extrabold">9/8/2025</h1>
          <h1 className=" text-white font-extrabold text-2xl uppercase">
            Info coming soon
            <span className="text-utd-blue animate-fadeIn1s">.</span>
            <span className="text-utd-purple animate-fadeIn2s">.</span>
            <span className=" text-utd-blue animate-fadeIn3s">.</span>
          </h1>
        </div>
        <div>
          <div className="w-screen flex flex-row place-content-center py-4">
            <Socials />
          </div>
        </div>
      </div>
      <div className="flex flex-row py-8">
        <MailchimpFormHolding />
      </div>
    </div>
  );
}
