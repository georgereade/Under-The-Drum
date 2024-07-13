import BuyTickets from "../homepage/components/buyTickets";
import MailchimpForm from "../homepage/components/mailchimpForm";
import { Inconsolata } from "next/font/google";
import { useState } from "react";
import Head from "next/head";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Info() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleVisibility = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`flex flex-col items-center bg-utd-navy w-screen h-full px-3 text-left leading-loose ${inconsolata.className} sm:bg-[url('/Drawings.png')] bg-cover bg-center bg-repeat-y bg-fixed`}
    >
      <Head>
        <title>Info | Under The Drum</title>
      </Head>
      <div className="md:w-4/5 bg-utd-navy pb-8 md:px-16">
        {" "}
        <h1 className="text-5xl py-6">Info</h1>
        <h2
          onClick={() => toggleVisibility(0)}
          className="cursor-pointer border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>WELCOME TO UNDER THE DRUM!
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(0) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <p>
            A new music festival in the County Antrim Hills. Why ‘Under the
            Drum’? Well, one of the hills overlooking the site is named
            Drumadarragh, but we also liked the associations of the name, the
            idea of ‘peering under the lid’ of the drum. The festival has been a
            dream for us for a long time. 2024 is the inaugural year, and so we
            are keeping things intimate and low key this year. For that reason,
            things may be a little unsophisticated, but the music will be great,
            and the beer will be cold! We want this to be a welcoming, friendly
            and fun event, with intimate performances and a chance to enjoy the
            beautiful surroundings.
          </p>
          <p>
            We are excited to welcome some incredible bands and musicians from
            across Ireland and the UK, as well as poetry, art, falconry
            displays, and delicious food and drink. It’s important to note here
            that this year Under the Drum is an 18+ event. (More information
            below). Please don’t hesitate to get in touch if you have any
            questions, or if you want to find out how to get involved in the
            future. Email us at info@underthedrum.co.uk or send us a message on
            Instagram. This page and the website will be updated with
            information as it becomes available. If there’s anything you’re not
            sure of, just give us a shout!
          </p>
          <p>Cheers! Under the Drum</p>
        </div>
        <h2
          onClick={() => toggleVisibility(1)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Where?
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(1) ? "max-h-96" : "max-h-0"
          }`}
        >
          Breckenhill, near Ballyclare (BT39 0TB). Roughly 30 mins from Belfast.
          Directions can be found on the Location page.
        </div>
        <h2
          onClick={() => toggleVisibility(2)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>When?
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(2) ? "max-h-96" : "max-h-0"
          }`}
        >
          Saturday 28th September. The site opens 11am - 12.30am (for day
          tickets) and closes 1pm Sunday 29th (for campers). Music on the main
          stage will finish at 11.30pm.
        </div>
        <h2
          onClick={() => toggleVisibility(3)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Facilities
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(3) ? "max-h-96" : "max-h-0"
          }`}
        >
          There will be toilets (with disabled access), fresh water (please
          bring your own refillable bottle), first aid on hand. Showers are also
          available to campers if required.
        </div>
        <h2
          onClick={() => toggleVisibility(4)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Camping
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(4) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          Camping will be available on Saturday night. We have one site for
          campervans and one for tents. More information about this will be sent
          out closer to the time, and we will ask you to confirm what type of
          pitch you need. Breakfast will be available on the Sunday morning for
          campers. We ask all campers to be off the site by 1pm on Sunday.
          Please leave the campsite as you found it, and take rubbish home with
          you! Note that no glass bottles or open flames are allowed on the camp
          site or festival site.
        </div>
        <h2
          onClick={() => toggleVisibility(5)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Travel
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(5) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          We are looking into organising coaches from Belfast and back, and will
          update on that closer to the time! We strongly advise booking taxis
          well in advance if travelling by taxi, as we are a rural location and
          they are not readily available. There will be parking available, but
          we do ask that you car share where possible, to save on space!
        </div>
        <h2
          onClick={() => toggleVisibility(6)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Food & Drink
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(6) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          There will be a number of food trucks available all day and the
          following morning, along with a coffee truck and a bar. We have done
          our best to cover all dietary requirements, but if you have specific
          requirements it might be best to bring a few snacks.
        </div>
        <h2
          onClick={() => toggleVisibility(7)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Children & Pets
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(7) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          This is an 18+ event. Children under 12 are welcome if supervised by
          an adult and if advised of before hand, but please note that we
          don&apos;t have any entertainment or food especially for young ones.
          Please get in touch if you have any questions about this. We hope to
          be able to welcome younger festival goers in the future. Sorry, no
          dogs (or other pets!) allowed!
        </div>
        <h2
          onClick={() => toggleVisibility(8)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Weather
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(8) ? "max-h-96" : "max-h-0"
          }`}
        >
          Obviously this event is in Northern Ireland in the Autumn. We will be
          hoping for an Indian Summer, but please come prepared for wet/muddy
          weather. The main stage is indoors.
        </div>
        <h2
          onClick={() => toggleVisibility(9)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Tickets and pricing
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(9) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <p>Early bird: £45 for a day pass £60 for camping</p>{" "}
          {/* <p>Standard Tickets: 50 for day pass £65 for camping</p>{" "} */}
          <p>
            Ticket payments are processed securely through Stripe. On purchase
            you will receive an automatic receipt from Stripe, confirmation and
            details will be sent out a few days later. Please add the names of
            any guests when buying the tickets. Up to four can be purchased per
            person.
          </p>
        </div>
        <h2
          onClick={() => toggleVisibility(10)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Access and disabilities
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(10) ? "max-h-96" : "max-h-0"
          }`}
        >
          Much of the site is accessible, but please contact us if you have any
          specific questions about accessibility of the site.
        </div>
        <h2
          onClick={() => toggleVisibility(11)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Sustainability & Respect
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(11) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          We are very keen to make Under the Drum as sustainable as possible. We
          will be offering a reusable cup system, and we ask you to please bring
          reusable water bottles with you. Breckenhill is a natural and special
          spot, with a wealth of wildlife and flora around. We ask that you
          treat the venue and spaces and their creatures with respect, and to
          please dispose of rubbish considerately. Anyone found to be
          mistreating the site or its spaces will be asked to leave without
          warning. Breckenhill is also surrounded by private farmland, and so we
          ask that you do not wander to any unallocated ‘festival’ spaces. The
          good treatment of the venue and our surroundings is essential to allow
          the festival to continue into the future, thank you for your
          consideration!
        </div>
        <h2
          onClick={() => toggleVisibility(12)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Discrimination
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(12) ? "max-h-96" : "max-h-0"
          }`}
        >
          We welcome festival attendees from all walks of life, gender, sexual
          orientation, race, religion and ethnicity. Anyone found to be
          infringing or disrespecting this will be asked to leave the premises
          without prior warning.
        </div>
        <h2
          onClick={() => toggleVisibility(13)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Who are we?
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(13) ? "max-h-96" : "max-h-0"
          }`}
        >
          We are the Reade family, who have been at Breckenhill for over 30
          years. David, Hen, Rosanna, William and George are hosting and
          organising the event, along with many talented friends and supporters.
        </div>
      </div>

      <BuyTickets />
      <MailchimpForm />
    </div>
  );
}
