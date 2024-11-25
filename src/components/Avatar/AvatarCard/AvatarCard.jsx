import React, { useEffect, useRef, useState } from "react";
import { Image, MoreHorizontal, PenLine, Trash2, User } from "lucide-react";
import { Popover } from "@mui/material";
import AvatarVideos from "../../../lib/AvatarVdo";
import Card from "./Card";

const AvatarCard = ({ type }) => {
  
  const videos = AvatarVideos[type];

  return (
    <div className="grid grid-cols-12 gap-5">
      {videos?.map((avatar, index) => (
        <Card avatar={avatar} key={index} />
      ))}
    </div>
  );
};

export default AvatarCard;
