import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="px-32 pt-16 bg-slate-900 text-foreground pb-11">
      <div className="flex flex-row items-start justify-between">
        <div>
          <Image
            src="/images/logo.png"
            alt="/images/logo.png"
            width={160}
            height={36}
          />
          <div className="mt-8 text-muted">
            Great platform for the job seeker that <br />
            passionate about startups. Find your dream job <br />
            easier.
          </div>
        </div>
        <div>
          <div className="mb-5 text-lg font-semibold text-primary-foreground">
            About
          </div>

          <div className="space-y-4">
            {aboutLinks.map((item: string, i: number) => (
              <Link className="block text-muted" key={i} href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 text-lg font-semibold text-primary-foreground">
            Resources
          </div>

          <div className="space-y-4">
            {resourceLinks.map((item: string, i: number) => (
              <Link className="block text-muted" key={i} href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 text-lg font-semibold text-primary-foreground">
            Get job notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to <br /> your inbox weekly
          </div>
          <div className="inline-flex items-center gap-3 mt-10">
            <Input placeholder="Email Address" className="py-5" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="mt-20 bg-gray-300 mb-11" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-slate-600">
          2024 @ JobHunly. All rights reserved.
        </div>
        <div className="space-x-3">
          {socialMediaImg.map((item: string, i: number) => (
            <Image className="inline" src={item} key={i} alt={item} width={32} height={32}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
