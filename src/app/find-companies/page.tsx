"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompaniesSchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FindComapniesPageProps {}

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: CompanyType[] = [
  {
    categories: "Marketing",
    description: "Lorem",
    image: "/images/company2.png",
    name: "Social Media Assistant",
    totalJobs: 10,
  },
  {
    categories: "Marketing",
    description: "Lorem",
    image: "/images/company2.png",
    name: "Social Media Assistant",
    totalJobs: 10,
  },
  {
    categories: "Marketing",
    description: "Lorem",
    image: "/images/company2.png",
    name: "Social Media Assistant",
    totalJobs: 10,
  },
];
const FindComapniesPage: FC<FindComapniesPageProps> = ({}) => {
  const formFilter = useForm<z.infer<typeof formFilterCompaniesSchema>>({
    resolver: zodResolver(formFilterCompaniesSchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmit = async (val: z.infer<typeof formFilterCompaniesSchema>) => {};

  return (
    <ExploreDataContainer
      filterFormms={FILTER_FORMS}
      formFilter={formFilter}
      onSubmitFilter={onSubmit}
      title="dream companies"
      subtitle="Find the dream companies your dream work for"
      loading={false}
      type="company"
      data={dummyData}
    />
  );
};

export default FindComapniesPage;
