import dynamic from "next/dynamic";
import React from "react";
// import SideNav from "@/components/Navbar/SideNav/Dashboard/SideNav";
import SideNav from "../../components/Navbar/SideNav/Dashboard/SideNav";
import VerticalTabs from "./SideTabs";
import { ArrowLeft, MoveLeft } from "lucide-react";

const NavBar = dynamic(() => import("./Navbar"), {
  ssr: false,
  loading: () => {
    return <div className="w-full h-[65px]"></div>;
  },
});

const BaseComponentAI = () => {
  return (
    <>
      <SideNav />
      <NavBar
        title={<div className="flex gap-2 items-center">
          <ArrowLeft size={18} color="#05686e"/>
          <p className="text-[#05686e] text-[16px]">{"Home"}</p>
        </div>}
        cta={"Save"}
      />
      <div
        className="w-full h-[calc(100vh-65px)] flex justify-end pl-[72px] relative"
        id="collabWrapperDiv"
      >
        <VerticalTabs />
      </div>
    </>
  );
};

export default BaseComponentAI;
