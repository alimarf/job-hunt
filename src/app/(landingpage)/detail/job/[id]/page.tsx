import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BiCategory } from "react-icons/bi";
import FormModalApply from "@/components/organism/FormModalApply";

interface DetailJobPageProps {}

const DetailJobPage: FC<DetailJobPageProps> = ({}) => {
  return (
    <>
      <div className="px-32 pt-10 bg-slate-100 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link className="hover:underline hover:text-black" href="/">
            Home
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href="/find-companies"
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href="/detail/company/1"
          >
            Twitter
          </Link>{" "}
          /{" "}
          <Link
            className="hover:underline hover:text-black"
            href="/detail/company/1"
          >
            Social Media Assistant
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between w-11/12 p-5 mx-auto mt-10 bg-white shadow">
          <div className="inline-flex items-center gap-5">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={88}
              height={88}
            />
            <div>
              <div className="text-2xl font-semibold">
                Social Media Asisstant
              </div>
              <div className="text-muted-foreground">
                Agency . Paris, France . Full-Time
              </div>
            </div>
          </div>

          <FormModalApply />
        </div>
      </div>

      <div className="flex flex-row items-start gap-10 px-32 py-16">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="mb-3 text-3xl font-semibold">Description</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum, dolor sit amet consectetur hawidhuwdh
                jaidwjaidjawidjawidjaiwdjawd
                jaidwjaidjawidjawidjaiwdjawdjdiawjdwiaj
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="mb-3 text-3xl font-semibold">Responsibilities</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum, dolor sit amet consectetur hawidhuwdh
                jaidwjaidjawidjawidjaiwdjawd
                jaidwjaidjawidjawidjaiwdjawdjdiawjdwiaj
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="mb-3 text-3xl font-semibold">Who You Are</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum, dolor sit amet consectetur hawidhuwdh
                jaidwjaidjawidjawidjaiwdjawd
                jaidwjaidjawidjawidjaiwdjawdjdiawjdwiaj
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="mb-3 text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum, dolor sit amet consectetur hawidhuwdh
                jaidwjaidjawidjawidjaiwdjawd
                jaidwjaidjawidjawidjaiwdjawdjdiawjdwiaj
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>

            <div className="p-4 mt-6 bg-slate-50">
              <div className="mb-2">
                <span className="font-semibold">5 Applied</span>{" "}
                <span className="text-gray-600">of 10 capacity</span>
              </div>
              <Progress value={50} />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">Juli 31, 2023</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted on</div>
                <div className="font-semibold">Juli 31, 2023</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job type</div>
                <div className="font-semibold">Full-Time</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">$75k-$85k USD</div>
              </div>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Category</div>
            <div className="inline-flex gap-4 my-10">
              <Badge>Marketing</Badge>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="inline-flex gap-4 my-10">
              {[0, 12].map((item: number) => (
                <Badge variant="outline" key={item}>
                  Marketing
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 pb-16">
        <Separator className="mb-14" />

        <div className="mb-6">
          <div className="text-3xl font-semibold">Perks & Benefits</div>
          <div className="mt-1 text-gray-500">
            This job comes with several perks and benefits
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {[0, 1, 3].map((item: number) => (
            <div key={item}>
              <BiCategory className="w-12 h-12 text-primary" />
              <div className="mt-6 text-xl font-semibold">Full Healthcare</div>
              <div className="mt-3 text-sm text-gray-500">
                we believe in thriving communities and that starts with out team
                being happy and healthy
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailJobPage;
