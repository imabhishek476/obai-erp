import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRightFromSquare,
  Download,
  Folder,
  Heart,
  Image,
  ImagePlus,
  ListVideo,
  MonitorCheck,
  MoreHorizontal,
  PenLine,
  Play,
  RotateCw,
  Tablet,
  Trash2,
  User,
  Video,
} from "lucide-react";
import { Checkbox, Popover } from "@mui/material";
import AvatarLibCards from "../../../lib/AvatarVdo";

const Card = ({avatar}) => {
  const [Loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState("Untitled Video");
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const componentRef = useRef();

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClickOutside = (e) => {
    if (componentRef.current && !componentRef.current.contains(e.target)) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="lg:col-span-3 md:col-span-4 col-span-12 relative group">
      <div
        onMouseLeave={handlePopoverClose}
        className="p-2 rounded-md overflow-hidden hover:border-1 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer"
      >
        <div>
          <img
            src={avatar.img}
            alt="Card Image"
            className="w-full lg:w-full md:w-full h-[180px] object-fill rounded-md"
          />
          <div
            className={`absolute top-1 right-1 group-hover:opacity-100 opacity-0 ${
               "opacity-100"
            } transition-opacity duration-600`}
          >
            <div className="flex gap-1">
              <div
                aria-owns={"mouse-over-popover"}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                className={`w-[36px] h-[30px] opacity-0 group-hover:opacity-100 ${
                  open ? "bg-[#05686e] text-white" : "bg-gray-100"
                } hover:bg-[#05686e] hover:text-white rounded-md pl-2.5 pt-1.5 pb-3`}
              >
                <MoreHorizontal
                  className="text-inherit"
                  size={18}
                  strokeWidth={2}
                />
              </div>

              <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                // disableRestoreFocus
                onClose={handlePopoverClose}
              >
                <div className="flex flex-col gap-y-3 justify-start items-start content-start pr-1 overflow-hidden pt-0">
                  <ul className="w-[150px]">
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <ArrowUpRightFromSquare size={18} />
                      <div className="text-sm">Share</div>
                    </li>
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <RotateCw size={18} />
                      <div className="text-sm">Edit as New</div>
                    </li>
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <ImagePlus size={18} />
                      <div className="text-sm">Create Template</div>
                    </li>
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <PenLine size={18} />
                      <div className="text-sm">Rename</div>
                    </li>
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <Folder size={18} />
                      <div className="text-sm">Move to</div>
                    </li>
                    <li
                      onClick={handlePopoverClose}
                      className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <Trash2 size={18} />
                      <div className="text-sm">Trash</div>
                    </li>
                  </ul>
                </div>
              </Popover>
            </div>
          </div>
          <div className="absolute top-20 bottom-20 right-[55%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="w-[40px] h-[40px] bg-gray-100 text-[#05686e] rounded-full flex justify-center items-center">
              <Play size={20} />
            </div>
          </div>
          <div className="left-1">
            <div className="w-[50px] h-[20px] bg-gray-100 text-[#05686e] rounded-md flex justify-center items-center">
              <div className="flex items-center gap-1">
                <Video size={15} />
                <p className="text-[10px]">15s</p>
              </div>
            </div>
          </div>

          
        </div>
        <div className="mt-1" onClick={handleClick}>
          <div>
            <p className="text-[14px] text-[#232833]">{projectName}</p>
            <div className="border-l-4 border-indigo-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
