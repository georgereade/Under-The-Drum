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
      className="font-extrabold text-3xl rounded-xl mb-6 mt-3 border-2 border-utd-blue text-utd-blue p-8 transition ease-in-out delay-10 hover:scale-110 hover:text-white hover:bg-utd-red hover:border-utd-red"
    >
      <span>
        <i className="fas fa-ticket"></i>
      </span>
      Buy Tickets
    </Button>
  );
}
