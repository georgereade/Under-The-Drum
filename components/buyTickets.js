import { Button } from "@nextui-org/react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

export default function BuyTickets() {
  return (
    <div
    // initial={{ opacity: 0 }}
    // whileInView={{ opacity: 1 }}
    // viewport={{ once: true }}
    // transition={{ duration: 1, delay: 0.5 }}
    >
      <Button
        size="lg"
        variant="shadow"
        href="/tickets"
        as={Link}
        className="font-extrabold uppercase text-3xl rounded-xl my-3 border-2 bg-utd-red border-utd-red p-8 transition ease-in-out delay-10 hover:scale-110 hover:text-black hover:bg-utd-green hover:border-utd-green"
      >
        <span>
          <i className="fas fa-ticket"></i>
        </span>
        buy tickets
      </Button>
    </div>
  );
}
