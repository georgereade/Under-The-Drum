import { useState, useEffect } from "react";
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
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { Inconsolata } from "next/font/google";
import { motion } from "framer-motion";
import CountdownTimer from "./countdownTimer";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    "LINE-UP",
    "LOCATION / CONTACT",
    "NEWS",
    "TERMS & CONDITIONS",
  ];
  const menuLinks = [
    "https://underthedrum-git-daybeforelaunch-georgereades-projects.vercel.app/#artists",
    "https://underthedrum-git-daybeforelaunch-georgereades-projects.vercel.app/location",
    "https://underthedrum-git-daybeforelaunch-georgereades-projects.vercel.app/news",
    "https://underthedrum-git-daybeforelaunch-georgereades-projects.vercel.app/ts&cs",
  ];

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 1,
      fill: "#012741",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      fill: "#012741",
    },
  };

  return (
    <Navbar
      shouldHideOnScroll={false}
      isBordered
      style={{
        backgroundColor: isScrolled ? "#012741" : "#359bdf",
        transition: "background-color 0.5s ease",
      }}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      id="navibar"
      className={`${inconsolata.className} dark bg-utd-navy text-xl`}
      maxWidth="2xl"
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
              className="mx-2 transition ease-in-out delay-10 hover:scale-110"
              style={{
                filter: isScrolled ? "invert(0)" : "invert(1)",
                transition: "filter 0.5s ease",
              }}
              width="50"
              height="50"
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/#artists"
            className="cursor-pointer uppercase font-bold hover:text-utd-red transition ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            Line-up
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="z-0 py-4 h-1/2 w-1 opacity-80"
          style={{
            backgroundColor: isScrolled ? "#359bdf" : "#ffffff",
            transition: "background-color 0.5s ease",
          }}
        />

        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/info"
            className="cursor-pointer uppercase font-bold hover:text-utd-red transition ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            Info
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="z-0 py-4 h-1/2 w-1 opacity-80"
          style={{
            backgroundColor: isScrolled ? "#736de0" : "#ffffff",
            transition: "background-color 0.5s ease",
          }}
        />
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/location"
            className="cursor-pointer uppercase font-bold hover:text-utd-red transition ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            Location & Contact
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="z-0 py-4 h-1/2 w-1 opacity-80"
          style={{
            backgroundColor: isScrolled ? "#db4c44 " : "#ffffff",
            transition: "background-color 0.5s ease",
          }}
        />
        <NavbarItem>
          <Link
            color="foreground"
            duration={500}
            href="/news"
            className="cursor-pointer uppercase font-bold hover:text-utd-red transition ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
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
            className="text-white bg-utd-red px-2 py-2.5 rounded-md uppercase font-extrabold transition ease-in-out hover:scale-125 hover:opacity-100 hover:text-black hover:bg-utd-green"
          >
            tickets
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="bg-utd-grey py-4 z-0 h-1/4 border-solid place-content-center w-1"
          style={{
            backgroundColor: isScrolled ? "#a9de7c" : "#ffffff",
            transition: "background-color 0.5s ease",
          }}
        />
        <NavbarItem className="sm:hidden">
          <Link
            href="/info"
            aria-current="page"
            className="text-white uppercase font-extrabold ease-in-out delay-10 hover:scale-110"
          >
            info
          </Link>
        </NavbarItem>
        {/* <NavbarItem className="sm:hidden">
          <Link
            href="/#artists"
            aria-current="page"
            className="uppercase font-extrabold ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            line-up
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="bg-utd-grey py-4 z-0 h-1/4 border-solid place-content-center w-1 sm:hidden"
          style={{
            backgroundColor: isScrolled ? "#359bdf" : "#ffffff",
            transition: "background-color 0.5s ease",
          }}
        />
        <NavbarItem className="sm:hidden">
          <Link
            href="/location"
            aria-current="page"
            className="uppercase font-extrabold ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            location
          </Link>
        </NavbarItem> */}
        <div className="hidden sm:flex pb-1">
          <CountdownTimer />
        </div>
      </NavbarContent>
      <NavbarMenu className="overflow-x-hidden bg-utd-navy">
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
              className={`${inconsolata.className} w-full font-extrabold py-5 text-3xl border-b-2 border-utd-purple`}
              onClick={handleMenuClose}
              href={menuLinks[index]}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <span
          className={`${inconsolata.className} text-2xl font-bold pt-5 w-fit`}
        >
          <CountdownTimer />
        </span>
        <Link
          href="https://www.instagram.com/under.the.drum/"
          className="absolute bottom-16"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            className="flex flex-col items-center transition ease-in-out hover:scale-110 mb-4 draw-item place-content-center text-transparent"
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
        </Link>
      </NavbarMenu>
    </Navbar>
  );
}
