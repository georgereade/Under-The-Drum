import Link from "next/link";
import CountdownTimer from "@/components/countdownTimer";

export default function TicketLower() {
  return (
    <section>
      <div className="bg-utd-navy">
        <p className="text-lg pt-16 text-gray-200">
          Payment processed through{" "}
          <span>
            <i
              className="fa-brands fa-cc-stripe text-green-600 text-3xl px-1 align-middle"
              alt="stripe"
            ></i>
          </span>
        </p>{" "}
        <p className="text-lg text-gray-200 py-2">
          Accepts all major cards and
          <span>
            <i
              className="fa-brands fa-google-pay text-3xl px-2 align-middle text-white"
              alt="google pay"
            ></i>
            <i
              className="fa-brands fa-cc-apple-pay text-3xl px-1 align-middle text-white"
              alt="apple pay"
            ></i>
          </span>
        </p>
      </div>
      <div className="px-8 py-8 text-lg bg-utd-navy">
        <p>Please note, anyone staying overnight must have a camping ticket.</p>
        <p>
          Camper Van and Tent tickets are the same price, it just helps us with
          planning!
        </p>
      </div>
      <h3 className="text-lg px-4 pt-6 bg-utd-navy text-white">
        First entry on Saturday: 11am
      </h3>
      <h3 className="text-lg px-4 pb-12 bg-utd-navy text-white">
        Check out the{" "}
        <Link href="/info" className="text-utd-green border-b border-utd-green">
          Info page
        </Link>{" "}
        for more information
      </h3>
      <h3>
        <Link
          href="/ts&cs"
          className="text-utd-green border-b border-utd-green"
        >
          Terms & Conditions
        </Link>{" "}
      </h3>
      <div className="sm:hidden py-8">
        <CountdownTimer />
      </div>
    </section>
  );
}
