import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import CountdownTimer from "./countdownTImer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const menuItems = ["Artists", "Venue", "Contact", "News"];
  const menuLinks = [
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#artists",
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#venue",
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#contact",
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/news",
  ];

  return (
    <Navbar
      shouldHideOnScroll={false}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      id="navibar"
      className={`${montserrat.className}`}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/#home">
            <Image
              src="/UTDLogoWhite.png"
              alt="Under The Drum"
              className="mx-2"
              width="50"
              height="50"
              priority
              id="home"
            />
          </Link>
          <p className="font-bold text-inherit uppercase hidden md:block">
            Under The Drum
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/#artists"
            className="cursor-pointer"
          >
            Artists
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/#venue"
            className="cursor-pointer"
          >
            Venue
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/faqs"
            className="cursor-pointer"
          >
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/news"
            className="cursor-pointer"
          >
            News
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive>
          <Link
            href="/tickets"
            aria-current="page"
            className="text-utd-blue uppercase"
          >
            Tickets
          </Link>
          <Link
            href="/faqs"
            aria-current="page"
            className="sm:hidden mx-4 text-utd-red uppercase"
          >
            FAQs
          </Link>
        </NavbarItem>
        <div className="hidden sm:flex pb-1">
          <CountdownTimer />
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full py-8 text-3xl border-b-2 border-utd-blue"
              onClick={handleMenuClose}
              href={menuLinks[index]}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <span className="text-3xl pt-8">
          <CountdownTimer />
        </span>
      </NavbarMenu>
    </Navbar>
  );
}
