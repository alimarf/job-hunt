import { CompanyType } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface CompanyCardProps extends CompanyType {}

const CompanyCard: FC<CompanyCardProps> = ({
  categories,
  description,
  image,
  name,
  totalJobs,
}) => {
  return (
    <div className="p-6 border border-border">
      <div className="flex flex-row items-start justify-between">
        <Image src={image} alt={image} width={66} height={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="mb-2 text-lg font-semibold">{name}</div>
        <div className="text-sm line-clamp-3 text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline">{categories}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
