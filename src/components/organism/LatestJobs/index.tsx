import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
  return (
    <div className="relative py-16 mt-32 mb-10">
      <TitleSection word1="Latest" word2="jobs open" />

      <div className="grid grid-cols-3 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="Loprem ipsum sidolor amet"
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
