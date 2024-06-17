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
import { Nunito } from "next/font/google";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const nunito = Nunito({ subsets: ["latin"] });

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const menuItems = ["Artists", "Venue", "Contact"];
  const menuLinks = [
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#artists",
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#venue",
    "https://underthedrum-git-spotify-georgereades-projects.vercel.app/#contact",
  ];

  return (
    <Navbar
      shouldHideOnScroll={false}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      id="navibar"
      className={`${nunito.className}`}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image
              src="/UTDLogoWhite.png"
              alt="Under The Drum"
              className="mx-2"
              width="50"
              height="50"
              priority
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
            scroll={false}
            duration={500}
            href="https://underthedrum-git-spotify-georgereades-projects.vercel.app/#artists"
            className="cursor-pointer"
          >
            Artists
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            scroll={false}
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
            scroll={false}
            duration={500}
            href="/faqs"
            className="cursor-pointer"
          >
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive>
          <Link href="/tickets" aria-current="page" className="text-utd-blue">
            Tickets
          </Link>
          <Link
            href="/faqs"
            aria-current="page"
            className="sm:hidden mx-4 text-utd-red"
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
