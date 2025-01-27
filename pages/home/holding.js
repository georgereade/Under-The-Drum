import MailchimpForm from "@/components/mailchimpForm";
import Socials from "./socials";
import Image from "next/image";
import MailchimpFormHolding from "@/components/mailchimpFormHolding";

export default function Holding() {
  return (
    <div
      className="flex flex-col h-screen w-screen justify-between items-center px-0 mx-0 pb-0 my-0 relative bg-[url('/Satge.jpg')] bg-cover bg-no-repeat bg-bottom"
      id="home"
    >
      <div className="flex flex-row place-content-center w-full py-8">
        <Image
          src="/2025 logo colour.png"
          className=""
          alt="Under The Drum music festival Northern Ireland"
          width={400}
          height={400}
        />
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
