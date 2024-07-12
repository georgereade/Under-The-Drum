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
        <title>Terms & Conditions | Under The Drum</title>
      </Head>
      <div className="md:w-4/5 bg-utd-navy pb-8 md:px-16">
        {" "}
        <h1 className="text-4xl sm:text-5xl py-6">Terms & Conditions</h1>
        <h2
          onClick={() => toggleVisibility(0)}
          className="cursor-pointer border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Tickets
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(0) ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              As a condition of ticket purchase, all persons are bound by the
              terms herein, any rules, direction and regulations laid out by
              Event Management in person at the Event, or listed on the Event
              website www.underthedrum.co.uk.
            </li>
            <li className="ml-8">
              Tickets will be exchanged for wristbands upon entry to Under The
              Drum. Tickets will only be exchanged for wristbands with the named
              ticket holder. Proof of ID may be required.
            </li>
            <li className="ml-8">
              To change the named ticket holder – please contact
              info@underthedrum.co.uk before arrival at the event.
            </li>
            <li className="ml-8">
              Wristbands must be worn around the wrist of the Festival ticket
              holder for the duration of the festival. Any person found not to
              be wearing an official event wristband or accreditation pass or
              wearing a tampered wristband will be evicted from the event.
            </li>
            <li className="ml-8">
              Any person on site must be willing to display their wristband at
              all times, and to produce their purchased digital ticket or
              printed ticket at any time if requested by any member of Event
              Management. The festival and Promoter will not issue duplicate
              tickets for lost or stolen tickets. You are responsible for your
              wristband once you exchange your ticket for it. Damaged or
              tampered wristbands will be refused entry into the Event. In the
              event of a lost, stolen or damaged ticket/s, or where the ticket
              holder cannot attend the Event due to reasons beyond the Event
              Management’s control, no refunds will be issued. Tickets may not,
              without the prior consent of the Event Management, be resold or
              offered for resale at a premium over the face value of the ticket
              (including via online auction sites) or used for advertising,
              promoting or other commercial purposes (including competitions and
              trade promotions) or to promote the demand for other goods or
              services either by the original purchaser from the Event
              Management or any subsequent ticket holder. Tickets are sold
              “subject to license” approval.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(1)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Entry
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(1) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              Event Management reserves the right to refuse a ticket holder
              admission to the event or to evict that person from the event.
            </li>
            <li className="ml-8">
              Entry to the Event is only permitted to wristband holders and
              accredited staff who agree to have their vehicle and, if required,
              person searched on entry for glass, gas bottles, illicit
              substances and any other prohibited items. Refusal to consent to a
              search will prevent entry to the Event or eviction, without
              refund.
            </li>
            <li className="ml-8">
              Upon entry to the Event, patrons will be required to present their
              purchased digital ticket or printed ticket in exchange for a
              wristband specific to the year of the Event. Entry will only be
              granted to the named ticket holder. Proof of age may be required.
            </li>
            <li className="ml-8">
              There is a Zero Tolerance Policy in relation to anyone found to be
              trying to gain access without a valid ticket (trespassing) by any
              means. If such persons are found to be trespassing, they are
              breaking the law and will be handed over to the police. If a
              vehicle is found to be carrying or assisting a trespasser in any
              way, all occupants of the vehicle will be refused entry to the
              Event.
            </li>
            <li className="ml-8">
              It is your responsibility to ensure the validity of your own
              wristband.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(2)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Camping
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(2) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              Camping tickets grant access to the campsite for the night of
              Saturday 28th September.
            </li>
            <li className="ml-8">
              Campervans require camping tickets to be purchased for each
              attendee.
            </li>
            <li className="ml-8">
              Under The Drum ends at 13.00 on the Sunday afternoon – there is no
              camping overnight on the Sunday night of the festival.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(3)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Cancellation / Refund
          Policy
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(3) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              In the instance of event cancellation, Event Management will work
              with ticket holders to come to a fair and reasonable repayment
              which will be determined at the discretion of Event Management.
            </li>
            <li className="ml-8">
              This repayment will be no less than ninety-five percent (95%) of
              the purchase price of the ticket. The remaining 5% may be retained
              as a service fee.
            </li>
            <li className="ml-8">
              If a refund is made by the Promoter to the patron, under no
              circumstance will the booking fee be refunded.
            </li>
            <li className="ml-8">
              Requests for refunds must be made within 4 weeks of the
              cancellation of the festival.
            </li>
            <li className="ml-8">
              No further refunds will be processed after 4 weeks after the
              cancellation date.
            </li>
            <li className="ml-8">
              Under The Drum reserves the right to alter advertised playing
              times, substitute and/or cancel any artist and remove any other
              service/attraction being offered if required to do so. There will
              be no refunds for line-up changes.
            </li>
            <li className="ml-8">
              Event Management reserves the right to cancel the Event at any
              time due to a Force Majeure Event, which in Event Management’s
              sole discretion, makes it impossible or unsafe to continue
              operation of the Event. “Force Majeure” shall mean anything
              outside the Promoter’s reasonable control, including without
              limitation, pandemic, fire, bad weather, damage to Festival Site
              caused by bad weather, rain, flood, drought, storm, lightning, act
              of God, explosion, sabotage, accident, labour dispute, council or
              legal rulings or war.
            </li>
            <li className="ml-8">
              In such circumstances, the Promoter will not be liable for any
              damage, compensation, loss or expenses resulting from the Festival
              being cancelled, postponed, relocated or changed.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(4)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Postponement
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(4) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              If, for any reason the event date/time and/or venue is changed,
              ticket holders will be notified of the change and all tickets will
              remain valid for the rescheduled date.
            </li>
            <li className="ml-8">
              To keep up to date with any changes please view the website at
              www.UnderTheDrum.co.uk or contact info@underthedrum.co.uk.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(5)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Children at Under The Drum
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(5) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              Under The Drum does not allow 12 – 18 year olds on site. Children
              under the age of 12 are very welcome subject to the conditions
              below.
            </li>
            <li className="ml-8">
              All children under the age of 12 must be accompanied by a legal
              guardian as defined in the Guardianship Act 1973 who is at least
              25 years of age, and proof of age may be requested.
            </li>
            <li className="ml-8">
              The legal guardian must carry documentary evidence of such
              guardianship at all times at the Event. Such evidence may be
              requested to be furnished by the Event Management at any stage.
            </li>
            <li className="ml-8">
              Children under 12 can enter the event free of charge. Proof of age
              will be required for kids under the age of 12.
            </li>
            <li className="ml-8">
              Guardians must contact the festival in advance to request a kids
              pass for each child – these are limited and subject to capacity.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(6)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Conduct
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(6) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              You must ensure that you and your party act in an orderly manner
              whilst at the Event. Event Management reserves the right to refuse
              entry, or to evict any persons behaving in an inappropriate,
              anti-social, disorderly, offensive or dangerous manner. Please
              respect all fellow festival goers, staff and volunteers.
            </li>
            <li className="ml-8">
              You must respect and obey rules and direction from Event
              Management, in relation to but not limited to; environment,
              rubbish, recycling, smoking, behaviour and responsible consumption
              of alcohol.
            </li>
            <li className="ml-8">
              Anyone found in possession of, supplying or consuming illicit
              drugs will be evicted from the Event and reported to the police.
            </li>
            <li className="ml-8">
              Crowd surfing, moshing, slam or circle dancing are all dangerous
              activities that can seriously injure other patrons and Event
              Management reserves the right to evict wristband holders if they
              are involved in such activities.
            </li>
            <li className="ml-8">
              Anything that could cause harm to other patrons or damage to the
              site is a prohibited item and will not be permitted entry to the
              venue. This includes but is not limited to glass, weapons, lasers,
              fireworks, NoS (nangs) and illicit drugs. Prohibited items that
              are confiscated will not be returned. The Event site is a
              glass-free zone.
            </li>
            <li className="ml-8">
              The event is run as a total fire ban – no naked flames allowed at
              any point.
            </li>
            <li className="ml-8">
              In the case of an emergency evacuation, it is the responsibility
              of the ticket holder to follow all instructions and directives
              from Event Management. In an emergency situation, personal
              belongings may need to be left behind and Event Management does
              not take any responsibility for, nor will Management replace or
              refund the cost of, or the items themselves.
            </li>
            <li className="ml-8">
              In the event of injury or medical treatment requiring more than
              basic First Aid, Event Management may, at the expense of the
              ticket/wristband holder, arrange emergency medical treatment
              and/or Emergency Evacuation as deemed necessary by Event
              Management and First Aid team.
            </li>
            <li className="ml-8">
              By entering the Event site, you (the ticket/wristband holder)
              agree to being filmed or photographed, the product of which may be
              used for marketing or promotional purposes for perpetuity.
            </li>
          </ul>
        </div>
        <h2
          onClick={() => toggleVisibility(7)}
          className="cursor-pointer pt-4 border-b text-2xl font-bold text-utd-green"
        >
          <i class="fa-solid fa-angle-down pr-1"></i>Liability
        </h2>
        <div
          className={`text-md md:text-lg transition-max-height duration-500 ease-in-out pl-8 overflow-hidden ${
            activeIndices.includes(7) ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="list-disc pl-8">
            <li className="ml-8">
              You acknowledge and agree that entry to the Event is at your own
              risk. The land on which Under The Drum operates may present risks
              and dangers that may result in loss or damage, personal injury or
              even death. Knowing and understanding this, you agree to attend at
              your own risk. To the fullest extent permitted by law, Under The
              Drum does not accept liability of any nature for the acts,
              omissions or default of those providing services in connection
              with the Event or any liability for any injury, damage, loss,
              delay or additional expenses which are incurred at or in
              association with Under The Drum. Appropriate footwear and clothing
              must be worn at all times on the site and ear plugs should be worn
              if necessary.
            </li>
            <li className="ml-8">
              Where legislation implies any condition or warranty which cannot
              be excluded or modified, that condition or warranty will be deemed
              to be included in this agreement. However, our liability for any
              breach of such condition or warranty will be limited, at our
              option, to the resupply of the services or the cost of having the
              services supplied again. In no event will Under The Drum be liable
              for any indirect, consequential, exemplary or special damages.
            </li>
            <li className="ml-8">
              To the full extent permitted by law, ticket holders waive all
              legal rights of action against and fully release ‘Under The Drum
              Festival Ltd.’ (trading as ‘Under The Drum’), its agents,
              employees, members and volunteers for all claims for compensation
              for loss, damage, injury or death howsoever arising out of or in
              relation to the ticket holder’s participation in the Event,
              including without limitation, liability for any negligent or
              tortious act or omission on the part of the persons released or
              under statute or for breach of these terms and conditions. Event
              Management shall not be held liable for any loss, injury or
              damages sustained entering, leaving or at the Event.
            </li>
            <li className="ml-8">
              Any breach of any of these terms and conditions entitles Event
              Management to evict persons from the Event.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
