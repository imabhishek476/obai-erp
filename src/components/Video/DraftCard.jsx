import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "@nextui-org/react";
import {
  Button,
  Chip,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InboxIcon,
  DraftsIcon,
  Input
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Image,
  User,
  PenLine,
  Trash2,
  MoreHorizontal,
  RotateCw,
  ImagePlus,
  Folder,
  Pencil
} from "lucide-react";

import { FaceIcon } from "@radix-ui/react-icons";

const ariaLabel = { "aria-label": "description" };

const DraftCard = () => {
  const [Loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState("Untitled Video");
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // Date.Now
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

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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


  // what is the need of an interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // format date function already declared, use that
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  return (
    // repetitve tailwind properites check the properites.
    // what is thi group class?
    // why is relative twice declared?
    <div
      // onMouseLeave={handlePopoverClose}
      className="group relative px-2 py-2 w-full rounded-md overflow-hidden hover:border-1 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src="https://www.unite.ai/wp-content/uploads/2023/09/14-heygen-selecting-voice.png"
          alt="Card Image"
          // className="w-[260px] h-[260px] md:w-[328px] md:h-[300px] object-cover rounded-md"
          className="w-full lg:w-full md:w-full h-[180px] object-fill rounded-md"
        />

        <div className={`absolute top-1 right-1 opacity-0 ${open && 'opacity-100'} group-hover:opacity-100 transition-opacity duration-600`}>
          {/*popover button content */}
          <div>
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              className={`w-[36px] h-[30px] ${open? "bg-[#05686e] text-white" : "bg-gray-100"} hover:bg-[#05686e] hover:text-white rounded-md pl-2.5 pt-1.5 pb-3`}
            >
              <MoreHorizontal size={18} strokeWidth={2} />
            </div>

            <Popover
              id="mouse-over-popover"
              // sx={{
              //   pointerEvents: "none"
              // }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              // disableRestoreFocus
              // onMouseEnter={handlePopoverOpen}
              onClose={handlePopoverClose}
            >
              <div className="flex flex-col gap-y-3 justify-start items-start content-start pr-1 overflow-hidden pt-0">
                <ul className="w-[150px]">
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <RotateCw size={18} />
                    <a className="text-sm">Edit as New</a>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <ImagePlus size={18} />
                    <a className="text-sm">Create Template</a>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <PenLine size={18} />
                    <a className="text-sm">Rename</a>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Folder size={18} />
                    <a className="text-sm">Move to</a>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Trash2 size={18} />
                    <a className="text-sm">Trash</a>
                  </li>
                </ul>
              </div>
            </Popover>
          </div>
        </div>

        <div className="absolute top-20 bottom-20 right-[55%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-600">
          <div className="w-[30px] h-[30px] text-[#05686e] pl-1.5 pt-1 rounded-full">
            <Pencil size={20} />
          </div>
        </div>

        <div className="absolute bottom-1 left-1">
          <div className="w-[50px] h-[20px] bg-gray-100 text-[#05686e] rounded-md flex justify-center items-center">
            <div className="flex items-center gap-1 text-[12px]">Draft</div>
          </div>
        </div>

        {/* Checkbox  */}
        <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
          <Checkbox radius="sm"></Checkbox>
        </div>
      </div>
      <div className="mt-1" onClick={handleClick}>
        {isEditing ? (
          <Input
            defaultValue={projectName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            inputProps={ariaLabel}
          />
        ) : (
          <div>
            <p>{projectName}</p>
            <div className="border-l-4 border-indigo-500"></div>
          </div>
        )}
        {/* <Input defaultValue="New Project" inputProps={ariaLabel} /> */}
      </div>
      <div className="text-gray-500 lg:text-sm text-sm sm:text-sm">
        {formattedDate}
      </div>
    </div>
  );
};

export default DraftCard;
