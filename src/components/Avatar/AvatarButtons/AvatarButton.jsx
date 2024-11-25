import { Button, Tooltip } from "@nextui-org/react";
import { CircleUser, Shirt } from "lucide-react";
import { Gem, UploadCloud, Lightbulb } from "lucide-react";
import { Btndetails } from "../../../lib/AvararBtn";
import React from "react";

const AvatarButton = ({ type }) => {
  const buttons = Btndetails.find((btnGroup) =>
    btnGroup.some((btn) => btn.type === type)
  );
 console.log(buttons)
  const handleGetIcon = (name) => {
    switch (name) {
      case "Get more instant Avatar":
        return <Gem size={15} />;
      case "Upload":
        return <UploadCloud size={15} />;
      case "Generate":
        return <Lightbulb size={15} />;
      case "Create AI Outfit Avatar":
        return <Shirt size={15} />;
      case "Create Studio Avatar":
        return <CircleUser size={15} />;
      default:
        return null;
    }
  };

  if (!buttons) return null;
  return (
    <div>
      <div className="sm:flex gap-2 hidden">
        {buttons.map((btn, btnIndex) => (
          <Tooltip content={btn.name} key={btnIndex}>
            <Button
              className="min-w-[20px]"
              startContent={handleGetIcon(btn.name)}
            >
              {btn.name}
            </Button>
          </Tooltip>
        ))}
      </div>
      <div>
        <div className=" sm:hidden flex gap-2 justify-end mt-[-90px]">
          {buttons.map((btn, btnIndex) => (
            <Tooltip content={btn.name} key={btnIndex}>
              <Button className="min-w-[20px]">
                {handleGetIcon(btn.name)}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarButton;
