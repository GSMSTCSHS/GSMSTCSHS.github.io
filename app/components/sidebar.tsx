"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
// import { CircleUser } from "lucide-react";
import { PersonCircleOutline, Menu, CloseOutline } from "react-ionicons";
import { LucideCircleDotDashed } from "lucide-react";

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

const SideBar = () => {
  const [navAnchor, setNavAnchor] = React.useState<null | HTMLElement>(null);
  const [usrAnchor, setUsrAnchor] = React.useState<null | HTMLElement>(null);
  const [closedDrawer, setClosedDrawer] = React.useState(true);

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
  const closeDrawer = () => {
    setClosedDrawer(!closedDrawer);
  };
  return;

  return (
    <div className="flex md:hidden sticky top-0 shadow-xl w-full bg-cshs-800 justify-start items-start font-display py-1">
      <div className="flex flex-col items-center w-full">
        {/* Logo, Button, and account*/}
        <div className="flex flex-row w-full items-center justify-between px-3">
          <div className="flex flex-row gap-3 items-center">
            <Link className="flex flex-row gap-4 items-center" href={"/"}>
              <Image width={50} height={64} src="/icon.png" alt="CSHS Logo" />
            </Link>
            <p className="text-cshs-300 text-xl">GSMST CSHS</p>
          </div>
          <div className="flex flex-row gap-3 items-center  text-cshs-300">
            <button onClick={closeDrawer}>
              <Menu
                height="35px"
                width="px"
                color="text-cshs-300"
                className={`${closedDrawer ? "" : "hidden"}`}
              />
              <CloseOutline
                height="35px"
                width="px"
                color="text-cshs-300"
                className={`${closedDrawer ? "hidden" : ""}`}
              />
            </button>
            <Link href={"/account"} className="items-center mx-auto">
              <PersonCircleOutline
                height="35px"
                width="px"
                style={{ fill: "var(--color-cshs-300)" }}
              />
            </Link>
          </div>
        </div>
        <div
          className={`${
            closedDrawer ? "hidden" : ""
          } border border-cshs-300 rounded-full h-0 w-[95vw] my-1`}
        />

        <div
          className={`${
            closedDrawer ? "hidden" : ""
          } w-full flex flex-col pb-3 items-start pl-3 gap-2`}
        >
          {pages.map((value) => (
            <Link
              href={value.href}
              key={value.label}
              className={`${
                closedDrawer ? "hidden" : ""
              } md:text-lg lg:text-xl text-cshs-300`}
            >
              {value.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
