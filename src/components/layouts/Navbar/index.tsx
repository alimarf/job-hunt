import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
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
          <Link href="/find-jobs" className="mr-4 font-medium text-gray-400 cursor-pointer">
            Find Jobs
          </Link>
          <Link href="/find-companies" className="font-medium text-gray-400 cursor-pointer">
            Browse Companies
          </Link>
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
