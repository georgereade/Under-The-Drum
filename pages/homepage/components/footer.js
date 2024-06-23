import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={`shadow dark m-4 ${montserrat.className}`}>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between bottom-0">
        <span className="text-sm text-utd-blue sm:text-center">
          © 2024 Website by George Reade
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
  );
}
