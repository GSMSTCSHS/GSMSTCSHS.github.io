import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleUser } from "lucide-react";

const Navbar = () => {
  const links = [
    { text: "Home", href: "/" },
    { text: "Events", href: "/events" },
    { text: "Service", href: "/service" },
    { text: "Projects", href: "/projects" },
    { text: "Calendar", href: "/calendar" },
  ].map((obj) => (
    <div key={obj.text}>
      <Link href={obj.href} className="text-[20px]">
        {obj.text}
      </Link>
    </div>
  ));

  return (
    <nav className="flex sticky z-50 top-0 bg-neutral h-[100px] w-full justify-between">
      <div className="flex ml-5">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image src="/icon.png" width={85} height={85} alt="CSHS logo" />
          <p className="font-bold text-[36px]">GSMST</p>
        </Link>
      </div>
      <div className="flex items-center space-x-10">{links}</div>
      <div className="flex items-center mr-5">
        <Link target="_blank" href={"https://github.com/GSMSTCSHS/GSMSTCSHS.github.io"}>
        <Image
          src={"/github-mark-white.svg"}
          width={40}
          height={40}
          alt={"Github logo"}
        />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
