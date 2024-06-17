import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BuyTickets() {
  return (
    <Button
      size="lg"
      radius="full"
      variant="shadow"
      href="/tickets"
      as={Link}
      className="text-4xl mb-6 mt-3 border-2 border-utd-blue text-utd-blue p-10 transition ease-in-out delay-10 hover:scale-110"
    >
      <FontAwesomeIcon icon={faTicket} />
      Buy Tickets
    </Button>
  );
}
