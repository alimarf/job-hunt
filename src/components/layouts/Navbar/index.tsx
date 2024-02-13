import { Button } from "@/components/ui/button";
import { link } from "fs";
import Image from "next/image";
import React, { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="flex flex-row items-start justify-between px-32 py-5">
      <div className="inline-flex items-center gap-12">
        <div>
          <Image
            src={"/images/logo2.png"}
            alt="/images/logo2.png"
            width={160}
            height={36}
          />
        </div>
        <div>
          <span className="mr-4 font-medium text-gray-400 cursor-pointer">
            Find Jobs
          </span>
          <span className="font-medium text-gray-400 cursor-pointer">
            Browse Companies
          </span>
        </div>
      </div>
      <div className="inline-flex items-center h-8 gap-4">
        <Button variant={'link'}>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
