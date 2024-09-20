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
    "MAP",
    "TERMS & CONDITIONS",
  ];
  const menuLinks = [
    "https://underthedrum.co.uk/#artists",
    "https://underthedrum.co.uk/location",
    "https://underthedrum.co.uk/news",
    "https://underthedrum.co.uk/map",
    "https://underthedrum.co.uk/ts&cs",
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
              src="/utd-logo-mould.png"
              alt="Under The Drum music festival Northern Ireland"
              className="mx-2 transition ease-in-out delay-10 hover:scale-110"
              style={{
                filter: isScrolled ? "invert(1)" : "invert(0)",
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
            href="/map"
            className="cursor-pointer uppercase font-bold hover:text-utd-red transition ease-in-out delay-10 hover:scale-110"
            style={{
              color: isScrolled ? "#ffffff" : "#012741",
              transition: "color 0.5s ease",
            }}
          >
            Map
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="z-0 py-4 h-1/2 w-1 opacity-80"
          style={{
            backgroundColor: isScrolled ? "#a9de7c " : "#ffffff",
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
          className="bg-utd-grey py-4 z-0 h-1/4 border-solid place-content-center w-1 md:hidden xl:flex"
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
        <div className="hidden xl:flex">
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
          className={`${inconsolata.className} text-2xl font-bold pt-5 w-fit relative inline-flex`}
        >
          <CountdownTimer />
        </span>
        <li
          className="relative inline-flex pt-16 w-full justify-around flex-row mx-0 px-0 "
          data-open="true"
        >
          <Link
            href="https://www.instagram.com/under.the.drum/"
            aria-label="instagram"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="transition ease-in-out hover:scale-110 mb-4 draw-item-ig"
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
          <Link
            href="https://www.facebook.com/profile.php?id=61561380038001"
            aria-label="facebook"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="transition ease-in-out hover:scale-110 mb-4 draw-item-fb"
              alt="facebook"
              viewBox="0 0 50 50"
            >
              <motion.path
                d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"
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
        </li>
      </NavbarMenu>
    </Navbar>
  );
}
