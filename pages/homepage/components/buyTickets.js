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
      color="secondary"
      href="/tickets"
      as={Link}
      className="text-4xl my-6 border-2 border-white p-10 transition ease-in-out delay-10 hover:scale-110"
    >
      Buy Tickets
      <FontAwesomeIcon icon={faTicket} />
    </Button>
  );
}
