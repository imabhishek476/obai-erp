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
  Input,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Image, User, PenLine, Trash2, MoreHorizontal } from "lucide-react";

import { FaceIcon } from "@radix-ui/react-icons";

const BrandCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.target.value);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="group relative px-2 py-2 w-full rounded-md overflow-hidden hover:border-1 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer">
      <div className="relative">
        <img
          src="https://resource.heygen.ai/image/b56394c8ff6e49a384a5f46d698cdab2/original"
          alt="Card Image"
          className="w-full lg:w-full md:w-full h-[180px] object-fill rounded-md"
        />
        <div
          className={`absolute top-1 right-1 opacity-0 ${
            open && "opacity-100"
          } group-hover:opacity-100 transition-opacity duration-600`}
        >
          <div>
            <div
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              className={`w-[36px] h-[30px] ${
                open ? "bg-[#05686e] text-white" : "bg-gray-100"
              } hover:bg-[#05686e] hover:text-white rounded-md pl-2.5 pt-1.5 pb-3`}
            >
              <MoreHorizontal size={18} className="" strokeWidth={2} />
            </div>

            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              onClose={handlePopoverClose}
            >
              <div className="flex flex-col gap-y-3 justify-start items-start content-start pr-1 overflow-hidden pt-0">
                <ul className="w-[150px]">
                  <li className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image size={18} />
                    <div className="text-sm">Set Cover</div>
                  </li>
                  <li className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <User size={18} />
                    <div className="text-sm">Collaborators</div>
                  </li>
                  <li className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <PenLine size={18} />
                    <div className="text-sm">Rename</div>
                  </li>
                  <li className="flex items-center gap-2 py-2 px-2 my-1 w-full hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer">
                    <Trash2 size={18} />
                    <div className="text-sm">Trash</div>
                  </li>
                </ul>
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <div>
          <p className="text-[14px] text-[#232833]">Demo EaseDraft Brand Kit</p>
          <div className="border-l-4 border-indigo-500"></div>
        </div>
      </div>
      <div className="text-gray-500 lg:text-sm text-sm sm:text-sm">
        16 items
      </div>
    </div>
  );
};

export default BrandCard;
