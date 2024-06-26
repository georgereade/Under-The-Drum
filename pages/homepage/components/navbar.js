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
import { motion } from "framer-motion";

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
    <Navbar
      shouldHideOnScroll={false}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      id="navibar"
      className={`${montserrat.className} dark bg-black`}
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
          {/* <p className="font-bold text-inherit uppercase hidden md:block">
            Under The Drum
          </p> */}
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
          className="absolute bottom-16"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            className="flex flex-col items-center transition ease-in-out hover:scale-110 mb-12 draw-item place-content-center text-transparent"
            viewBox="0 0 50 50"
          >
            Instagram
            <motion.path
              d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
              variants={icon}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                default: { duration: 1, ease: "easeInOut" },
                fill: { duration: 1, ease: [0, 1, 0, 1] },
              }}
            />
          </motion.svg>
        </a>
      </NavbarMenu>
    </Navbar>
  );
}
