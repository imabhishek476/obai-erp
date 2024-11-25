import { Trash } from "lucide-react";
import React from "react";

const DragDraft = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div>
        <Trash size={50} />
      </div>
      <div className=" flex flex-col py-2">
        <p>Drag Files Here to Upload</p>
        
      </div>
      <p className="text-[12px] text-[#3e404980]">
          JPG, PNG up to 200MB(4167 x 4167), MP4, MOV up to 200MB, MP3, WAV up
          to 100MB.
        </p>
    </div>
  );
};

export default DragDraft;
