import { DropdownItem, DropdownMenu, Link } from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";

const CreateVideoDropdown = () => {
  return (
    <DropdownMenu className="w-[300px] h-[300px] p-0">
      <DropdownItem className="hover:border rounded-sm p-0" key="new">
        <p>Create video</p>
          <div className="flex h-1/2">
          <div className="w-1/2 h-full flex flex-col justify-center items-center rounded-lg hover:bg-purple-50">
            <span className="w-1/2 h-[40px]  bg-purple-600 flex items-center justify-center text-white text-2xl">
              +
            </span>
            <p>Landscape</p>
            <p>90 x 90</p>
            </div>
            <div className="w-[40px] h-1/2 bg-purple-600 flex items-center justify-center text-white text-2xl">
              +
            </div>
          </div>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default CreateVideoDropdown;
