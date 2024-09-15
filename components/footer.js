import React from "react";
import Link from "next/link";
import { Inconsolata } from "next/font/google";
import UtdBanner from "./utdBanner";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div>
      <UtdBanner />{" "}
      <footer className={`shadow dark m-4 ${inconsolata.className}`}>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between bottom-0">
          <span className="text-sm text-utd-blue sm:text-center">
            © 2024 Website by{" "}
            <Link
              href="mailto:georgereade@proton.me"
              className="hover:underline"
            >
              George Reade
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@underthedrum.co.uk"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
