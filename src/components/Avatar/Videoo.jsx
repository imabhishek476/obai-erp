import React, { useState } from "react";
import LoadingPage from "../LoadingPage/loadingPage";
import AvatarSection from "./AvatarSection";
import HeadCard from "./HeadCard";
import AvatarLibrar from "./AvatarLibrar";
import { avatarlib } from "../../lib/avatar";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

const OPTIONS = { align: 'start' };
function Videoo(document) {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <div className="mb-10 mx-5 lg:ml-[90px] relative">
        <div className="w-full mr-5 my-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg my-4">
              <p className="px-2">Project (1)</p>
            </div>
            
          </div>
          <div>
            <HeadCard options={OPTIONS} />
          </div>
        </div>
        <div className="mt-5">
          <AvatarSection />
          <AvatarLibrar />
        </div>
      </div>
    </>
  );
}

export default Videoo;
