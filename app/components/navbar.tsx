"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
// import { CircleUser } from "lucide-react";
import { PersonCircleOutline } from "react-ionicons";

const pages = [
  { label: "Home", href: "/" },
  { label: "Announcements", href: "/announcements" },
  { label: "Service", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Calendar", href: "/calendar" },
];
const settings = [
  { label: "Account", href: "/account" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Logout", href: "/logout" },
];

const Navbar = () => {
  const [navAnchor, setNavAnchor] = React.useState<null | HTMLElement>(null);
  const [usrAnchor, setUsrAnchor] = React.useState<null | HTMLElement>(null);

  const openNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(event.currentTarget);
  };
  const openUsrMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(event.currentTarget);
  };

  const closeNavMenu = () => {
    setNavAnchor(null);
  };
  const closeUsrMenu = () => {
    setNavAnchor(null);
  };

  return (
    <div className="hidden sm:block sticky top-0 shadow-xl w-full bg-cshs-800 justify-items-center font-display">
      <div className="flex flex-row w-full h-16 items-center justify-between px-4">
        <Link className="flex flex-row gap-4 items-center" href={"/"}>
          <Image width={64} height={64} src="/icon.png" alt="CSHS Logo" />
          <p className="text-2xl text-cshs-300">GSMST CSHS</p>
        </Link>
        {pages.map((value) => (
          <Link href={value.href} key={value.label} className="text-xl text-cshs-300">
            {value.label}
          </Link>
        ))}
        <Link href={"/account"}>
          <PersonCircleOutline
            height="48px"
            width="48px"
            style={{ fill: "var(--color-cshs-300)" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
