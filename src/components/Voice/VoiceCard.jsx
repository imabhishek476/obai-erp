import React, { useEffect, useState } from "react";
import { Play, Heart, PauseCircle } from "lucide-react";

const VoiceCard = ({ voice,toggalPlay,currentAudio,change }) => {
  const { id, icon, title, levels, music,isPlaying } = voice;

  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   setShow(currentAudio === title);
  //   console.log("lkjhbv" , currentAudio)
  // }, [isPlaying]);

  
  const playMusic = () => {
    toggalPlay(title,music);
  };

  return (
    <div
      className="flex items-center h-[120px] my-2 shadow-sm rounded-lg border to-black hover:scale-y-105 hover:shadow-lg mr-[30px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-4 cursor-pointer right-4">
          <Heart size={15} />
        </div>
      )}
      <div
        className="ml-5 -mt-5 p-3 rounded-full bg-blue-100 cursor-pointer hover:bg-blue-300"
        onClick={() => {
          playMusic(id);
          setShow(!show);
        }}
      >
        {show ? <PauseCircle size={20} /> : <Play size={20} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-2 ml-[10px]">
          <img src={icon} width={20} alt="" />
          {title}
        </div>
        <div className="">
          {levels.map((level) => (
            <span
              className="border to-black text-[10px] ml-1 bg-gray-100 p-1"
              key={level}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceCard;
