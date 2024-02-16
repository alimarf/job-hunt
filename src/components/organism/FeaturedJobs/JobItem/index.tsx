import { Badge } from "@/components/ui/badge";
import { JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobItemProps extends JobType {}

const JobItem: FC<JobItemProps> = ({
  categories,
  desc,
  image,
  jobType,
  location,
  name,
  type,
}) => {
  return <div className="p-6 border cursor-pointer border-border">
    <div className="flex flex-row items-start justify-between">
        <Image src={image}  alt={image} width={48} height={48}/>
        <span className="px-4 py-1 text-xs font-semibold border text-primary border-primary">
            {jobType}
        </span>
    </div>
    <div className="my-4">
        <div className="text-lg font-semibold">{name}</div>
        <div className="mb-3 text-muted-foreground">
            {type} . {location}
        </div>
        <div className="h-12 text-muted-foreground line-clamp-2 text-ellipsis">
            {desc}
        </div>
        <div className="space-x-2">
            {categories.map((item: string, i:number)=>(
                <Badge key={i} className="rounded border-primary bg-primary/5 text-primary">{item}</Badge>
            ))}
        </div>
    </div>

  </div>;
};

export default JobItem;
