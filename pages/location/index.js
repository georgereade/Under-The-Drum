import { Inconsolata } from "next/font/google";
import Head from "next/head";

import Link from "next/link";
import Contact from "../homepage/contact";

const mapsAPIKey = process.env.GOOGLE_MAPS_KEY;

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function FAQs() {
  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen overflow-x-hidden h-full px-3 text-left text-xl md:text-2xl leading-loose ${inconsolata.className} bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-local`}
    >
      <Head>
        <title>Location | Under The Drum</title>
      </Head>
      <h3 className="font-extrabold leading-loose text-center pt-6 text-3xl uppercase">
        Location
      </h3>
      <p className="pb-6 text-center">
        Breckenhill <br />
        45 Breckenhill Road <br />
        BT39 0TB
      </p>
      <div className="iframe_container py-8">
        {" "}
        <iframe
          className="r_iframe"
          title="google maps frame"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCyYmtY6bu65QsngesmEAwAnlB9nsG5KTI&q=Breckenhill&zoom=9"
          allowFullScreen
        ></iframe>
      </div>
      <video
        width="848"
        height="480"
        controls
        className="rounded-xl contrast-125 py-8 hue-rotate-30 saturate-150"
        poster="/house.jpg"
        preload="auto"
      >
        <source src="/drone-overview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="checkout-button-section flex flex-col items-center">
        <Link href="https://breckenhill.co.uk/contact/">
          {" "}
          <button className="text-utd-red font-bold border-2 border-utd-red rounded mt-8 breckenhill-button hidden">
            Breckenhill
          </button>
        </Link>
      </section>
      <Contact />
    </div>
  );
}
