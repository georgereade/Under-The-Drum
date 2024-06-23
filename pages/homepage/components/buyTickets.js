import { Button } from "@nextui-org/react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function BuyTickets() {
  return (
    <Button
      size="lg"
      variant="shadow"
      href="/tickets"
      as={Link}
      className="font-extrabold uppercase text-3xl rounded-xl mb-6 mt-3 border-2 border-utd-green text-utd-green p-8 transition ease-in-out delay-10 hover:scale-110 hover:text-white hover:bg-utd-red hover:border-utd-red"
    >
      <span>
        <i className="fas fa-ticket"></i>
      </span>
      Buy Tickets
    </Button>
  );
}
