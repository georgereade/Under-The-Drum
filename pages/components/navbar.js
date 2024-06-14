import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Artists", "Contact", "FAQs", "Venue"];

  return (
    <Navbar
      shouldHideOnScroll={false}
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      id="navibar"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/UTDLogoWhite.png"
            alt="Under The Drum"
            className="mx-2"
            width="50"
            height="50"
          />
          <p className="font-bold text-inherit uppercase hidden md:block">
            Under The Drum
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#artists">
            Artists
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#venue">
            Venue
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive>
          <Link href="#tickets" aria-current="page">
            Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            FAQs
          </Button>
        </NavbarItem>
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
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
