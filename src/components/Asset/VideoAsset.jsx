import React, { useState } from "react";
import LoadingPage from "../LoadingPage/loadingPage";
import Navbar from "../Navbar/Navbar";
// import Cards from "./Card";
import AssetCard from "./AssetCard";
import AssetSection from "./AssetSection";
import { Gem, Plus, Trash2 } from "lucide-react";
import { Button } from "@nextui-org/react";
import BrandCard from "./BrandCard";
import AssetFolders from "./AssetFolders";

function VideoAsset(document) {
  const [Loading, setLoading] = useState(false);

  return Loading ? (
    <LoadingPage />
  ) : (
    <> 
      <div className="mb-10 mx-5 lg:ml-[90px]">
        <div className="w-full mr-5 my-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg subpixel-antialiased my-4">
              <p className="px-2">Brand Kits (1)</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                startContent={<Plus size={15} />}
                className="bg-transparent border-2 rounded-md hover:bg-gray-100 transition-all duration-600"
              >
              
                New Brand Kit <Gem className="text-yellow-500" size={15} />
              </Button>
              
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
            <BrandCard/>
          </div>
        </div>
        <AssetFolders/>

        <div className="-mt-5">
          <AssetSection />
        </div>
      </div>
    </>
  );
}

export default VideoAsset;
