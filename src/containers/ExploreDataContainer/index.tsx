import FormFilterDynamic from "@/components/organism/FormFilterDynamic";
import FormSearchDynamic from "@/components/organism/FormSearchDynamic";
import JobCard from "@/components/organism/JobCard";
import { JobType, filterFormType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterFormms: filterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: any[];
  type: "job" | "company";
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  filterFormms,
  formFilter,
  onSubmitFilter,
  loading,
  subtitle,
  title,
  data,
  type,
}) => {
  return (
    <>
      <div className="px-32 pt-16 bg-slate-100 pb-14">
        <div className="mb-10">
          <div className="flex justify-center gap-2 mx-auto text-center mb-11">
            <span className="text-5xl font-semibold">Find Your</span>
            <div className="relative">
              <span className="text-5xl font-semibold text-primary">
                {title}
              </span>
              <div className="absolute top-10 w-[220px] h-10">
                <Image
                  src="/images/pattern2.png"
                  alt="/images/pattern2.png"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500">{subtitle}</div>
        </div>
        <FormSearchDynamic />
      </div>

      <div className="flex flex-row items-start gap-10 px-32 mt-20 mb-16">
        <div className="1/5">
          <FormFilterDynamic
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
            filterForms={filterFormms}
          />
        </div>
        <div className="w-4/5">
          <div className="mb-8">
            <div className="text-3xl font-semibold">All Jobs</div>
            <div className="text-muted-foreground">Showing 73 Result</div>

            <div className="grid grid-cols-1 gap-7">
              {loading ? (
                <div>Loading....</div>
              ) : (
                <>
                  {type === "job" ? (
                    <>
                      {data?.map((item: any, index: number) => (
                        <JobCard key={index} {...item} />
                      ))}
                    </>
                  ) : (
                    <>
                      {data?.map((item: any, index: number) => (
                        <div key={index}>Company Card</div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
