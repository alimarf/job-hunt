"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  filterForms,
  onSubmitFilter,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((items: filterFormType, i: number) => (
          <CheckboxForms
            key={i}
            formFilter={formFilter}
            items={items.items}
            label={items.label}
            name={items.name}
          />
        ))}

        <Button className="w-full mt-5">Apply Filter</Button>
        <Button variant="outline" className="w-full mt-3">
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
