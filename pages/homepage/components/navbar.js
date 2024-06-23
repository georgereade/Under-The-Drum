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

  const menuItems = ["Line-up", "Venue", "Contact", "News"];
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
      className={`${montserrat.className} dark`}
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
            className="cursor-pointer uppercase hover:text-utd-purple"
          >
            Line-up
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/#venue"
            className="cursor-pointer uppercase hover:text-utd-purple"
          >
            Venue
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/faqs"
            className="cursor-pointer hover:text-utd-purple"
          >
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/news"
            className="cursor-pointer uppercase hover:text-utd-purple"
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
            className="text-utd-red uppercase font-extrabold"
          >
            Tickets
          </Link>
          <Link
            href="/faqs"
            aria-current="page"
            className="sm:hidden mx-4 text-utd-blue uppercase font-extrabold"
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
        <a
          href="https://www.instagram.com/under.the.drum/"
          className="absolute bottom-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="#db4c44"
            className="bi bi-instagram transition ease-in-out delay-10 hover:scale-110 mb-12 text-transparent"
            viewBox="0 0 16 16"
          >
            Instagram
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
      </NavbarMenu>
    </Navbar>
  );
}
