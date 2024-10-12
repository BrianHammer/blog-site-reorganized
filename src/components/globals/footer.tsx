import Link from "next/link";
import React from "react";

const FOOTER_LINKS = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Connect",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Our Associates",
    href: "#",
  },
  {
    name: "Our Team",
    href: "#",
  },
  {
    name: "Work for us!",
    href: "#",
  },
  {
    name: "Affiliations",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray">
      <div className="container mx-auto px-5 flex flex-col gap-8 items-center justify-center">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <a href="#" className="text-xl font-bold">
            Blogging
          </a>
          <a className="text-sm " href="https://github.com/BrianHammer">
            Created by Brian Hammer
          </a>
        </div>

        <span>
          <ul className="flex flex-row gap-x-4 gap-y-0 flex-wrap justify-center items-center">
            {FOOTER_LINKS.map(({ name, href }, i) => (
              <li key={i}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
