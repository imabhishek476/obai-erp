import React, { useState } from "react";
import LoadingPage from "../LoadingPage/loadingPage";
import Navbar from "../Navbar/Navbar";
import Cards from "./Card";
import VideoSection from "./VideoSection";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@nextui-org/react";

function Video(document) {
  const [Loading, setLoading] = useState(false);

  return Loading ? (
    <LoadingPage />
  ) : (
    <>
      <Navbar
        hideLogo={true}
        content={{
          title: "Video",
          // comp: true
        }}
        footer={document.footer}
        videoButton={true}
      />
      <div className="mb-10 mx-5 lg:ml-[90px]">
        <div className="w-full mr-5 my-4">
          <div className="flex justify-between items-center">
            {/* what is the need for sub pixel anti aliased */}
            <div className="font-bold text-lg subpixel-antialiased my-4">  
              <p className="px-2">Project (1)</p>
            </div>
            <div className="flex gap-2">
              {/* use start content for icons in buttons */}
              <Button
                size="sm"
                className="bg-transparent border-2 rounded-md hover:bg-gray-100 transition-all duration-600"
              >
              <Trash2 size={15} />
                Trash
              </Button>
              <Button
                size="sm"
                className="bg-transparent border-2 rounded-md hover:bg-gray-100 transition-all duration-600"
              >
              <Plus size={15} />
                New Project
              </Button>
              {/* <button className="border-[1px] flex items-center hover:bg-gray-100 transition-all duration-600 my-2 mx-1 py-1 px-1 rounded-md h-[40px]">
                <Trash2 className="mx-2 h-[15px] lg:h-[15px] w-[15px] lg:w-[15px]" />
                <span className="lg:text-[16px] text-[10px] mr-2">Trash</span>
              </button>
              <button className="border-[1px] flex items-center hover:bg-gray-100 transition-all duration-600 my-2 mx-2 py-1 px-1 rounded-md h-[40px]">
                <Plus className="mx-2 h-[15px] lg:h-[15px] w-[15px] lg:w-[15px]"  />
                <span className="lg:text-[16px] text-[10px] mr-2">New Project</span>
              </button> */}
            </div>
          </div>
          {/* create grid accoding to the mentioned guidelines */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
            {/* Card  */}
            <Cards />
            {/* <Cards />
            <Cards />
            <Cards /> */}
          </div>
        </div>

        <div className="mt-5">
          <VideoSection />
        </div>
      </div>
    </>
  );
}

export default Video;
