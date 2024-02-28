import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJobs from "@/components/organism/FeaturedJobs";
import Hero from "@/components/organism/Hero";
import LatestJobs from "@/components/organism/LatestJobs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 right-0 w-2/3 h-screen -z-10">
        <Image src={"/images/pattern.png"} alt="images/pattern.png" fill />
      </div>
      <div className="px-32 mb-10">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJobs />
        <LatestJobs />
      </div>
    </>
  );
}
