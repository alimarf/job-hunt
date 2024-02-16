import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="relative z-10 inline-flex items-center gap-4 p-4 mt-6 rounded-sm shadow-sm bg-background w-max">
        <div className="inline-flex items-center gap-3">
          <AiOutlineSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[300px] border-none "
            placeholder="Job Title or keyword"
          />
        </div>
        <div className="inline-flex items-center gap-3">
          <HiOutlineLocationMarker className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[300px] border-none text-gray-500 outline-none py-8">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button className="px-10 py-8 text-lg">Search my job</Button>
        </div>
      </div>
      <div className="mt-3 text-muted-foreground">
        Popular ; UI Designer, UX Researcher, Android, Admin
      </div>
    </>
  );
};

export default FormSearch;
