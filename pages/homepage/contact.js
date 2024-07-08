import { motion } from "framer-motion";
import MailchimpForm from "./components/mailchimpForm";
import CountdownTimer from "./components/countdownTimer";

export default function Contact() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 1,
      fill: "#db4c44",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      fill: "#db4c44",
    },
  };

  return (
    <div
      className="flex flex-col items-center w-screen bg-utd-navy"
      id="contact"
    >
      <h3
        className="font-extrabold
text-2xl leading-loose mt-12 uppercase"
      >
        Contact
      </h3>
      <h3 className="mb-6 transition ease-in-out delay-10 hover:scale-110">
        <a
          className="font-normal text-base "
          href="mailto:info@underthedrum.co.uk"
          aria-label="info@underthedrum.co.uk"
          alt="info@underthedrum.co.uk"
        >
          info@underthedrum.co.uk
        </a>
      </h3>
      <a
        href="https://www.instagram.com/under.the.drum/"
        className="h-16 mb-12 text-center"
        aria-label="instagram"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          className="flex flex-col items-center transition ease-in-out hover:scale-110 mb-12 draw-item place-content-center"
          alt="instagram"
          viewBox="0 0 50 50"
        >
          <motion.path
            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              default: { duration: 1, ease: "easeInOut" },
              fill: { duration: 2, ease: "easeInOut" },
            }}
          />
        </motion.svg>
      </a>
      <div className="flex flex-col text-2xl">
        <CountdownTimer />
      </div>

      <MailchimpForm />
    </div>
  );
}
