import { JobType } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

interface JobCardProps extends JobType {}

const JobCard: FC<JobCardProps> = ({
  applicants,
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  needs,
  type,
}) => {
  const router = useRouter()
  return (
    <div onClick={()=> router.push('/detail/job/1')} className="flex flex-row items-center justify-between w-full p-6 mb-5 border border-border">
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="mb-2 text-sm text-muted-foreground">
            {type} . {location}
          </div>
          <div className="inline-flex items-center h-5 gap-2">
            <Badge variant="secondary">{jobType}</Badge>
            <Separator orientation="vertical" />
            {categories.map((item: string, index: number) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px]">
        <Button className="w-full" size="lg">
          Apply
        </Button>
        <Progress value={(applicants / needs) * 100} className="my-4" />
        <div className="mt-2 text-sm text-center text-gray-500">
          <span className="font-semibold text-black">{applicants} applied</span>{" "}
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;
