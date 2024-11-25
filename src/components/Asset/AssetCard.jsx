import React, { useState, useRef, useEffect } from "react";
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
import { Image, User, PenLine, Trash2, MoreHorizontal, Folder, Pencil } from "lucide-react";

import { FaceIcon } from "@radix-ui/react-icons";

const ariaLabel = { "aria-label": "description" };

const AssetCard = () => {
  const [Loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState("New Project");
  const [anchorEl, setAnchorEl] = useState(null);
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

  return (
    <div
      // onMouseLeave={handlePopoverClose}
      className="group relative px-2 py-2 w-full rounded-md overflow-hidden hover:border-1 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer"
    >
      <div className="relative">
        <div className="flex justify-center items-center bg-[#1eaeb6] h-[180px] rounded-lg">
        <Folder size={100} />
        </div>
        <div className={`absolute top-1 right-1 opacity-0 ${open && 'opacity-100'} group-hover:opacity-100 transition-opacity duration-600`}>
          {/* popover button content */}
          <div>
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              className={`w-[36px] h-[30px] ${open? "bg-[#05686e] text-white" : "bg-gray-100"} hover:bg-[#05686e] hover:text-white rounded-md pl-2.5 pt-1.5 pb-3`}
            >
              <MoreHorizontal size={18} className="" strokeWidth={2} />
            </div>

            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              // disableRestoreFocus
              // onMouseEnter={handlePopoverOpen}
              onClose={handlePopoverClose}
            >
              <div className="flex flex-col gap-y-3 justify-start items-start content-start pr-1 overflow-hidden pt-0">
                <ul className="w-[150px]">
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image size={18} />
                    <div className="text-sm">Set Cover</div>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <User size={18} />
                    <div className="text-sm">Collaborators</div>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <PenLine size={18} />
                    <div className="text-sm">Rename</div>
                  </li>
                  <li onClick={handlePopoverClose} className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Trash2 size={18} />
                    <div className="text-sm">Trash</div>
                  </li>
                </ul>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="mt-1" onClick={handleClick}>
        {isEditing ? (
          <div>
          <Input
            defaultValue={projectName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            inputProps={ariaLabel}
          />
          {/* <Pencil size={13} /> */}
          </div>
          
        ) : (
          <div>
            <p>{projectName}</p>
            <div className="border-l-4 border-indigo-500"></div>
          </div>
        )}
        {/* <Input defaultValue="New Project" inputProps={ariaLabel} /> */}
      </div>
      <div className="text-[#818999] lg:text-[12px] text-[12px] sm:text-[12px]">
        No Items
      </div>
    </div>
  );
};

export default AssetCard;
