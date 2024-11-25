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
import AvatarLibCards  from "../../../lib/AvatarVdo";
import AvatarCard from "./AvatarCard";

const AvatarCardLi = ({type}) => {
  // console.log(type)
  // console.log(AvatarLibCards)
  const AvatarLiVideos = AvatarLibCards[type];
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
      <div className="grid grid-cols-12">
      {AvatarLiVideos?.map((avatar, index) => (
        <AvatarCard type={type} avatar={avatar} key={index} />
      ))}
      </div>
      
  );
};

export default AvatarCardLi;
