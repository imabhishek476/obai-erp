import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import AvatarButton from "./AvatarButtons/AvatarButton";
import AvatarCard from "./AvatarCard/AvatarCard";

const AvatarSection = () => {
  const [selected, setSelected] = React.useState("instantAvatar");

  const tabItems = [
    {
      id: "instantAvatar",
      label: "Instant Avatar",
    },
    {
      id: "photoAvatar",
      label: "Photo Avatar",
    },
    {
      id: "studioAvatar",
      label: "Studio Avatar",
    },
  ];

  return (
    <div className="flex w-full flex-col mt-[-20px]">
      <div className="flex justify-between items-center my-4">
        <div className="font-bold text-lg my-2">
          <p className="px-2">My Avatar (4)</p>
        </div>
        
        <div className="md:hidden flex">
          {tabItems.find((item) => item.id === selected)?.avatarComponent}
        </div>
      </div>
      <div className="">
        <div className="my-2 mx-2 px-1 min-w-[200px] sm:flex sm:flex-row justify-between -mt-5 -ml-5">
          <Tabs
            aria-label="Dynamic tabs"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            items={tabItems.map(({ id, label }) => ({ id, label }))}
            classNames={{
              tab: "rounded-sm",
              tabContent: "group-data-[selected=true]:text-[#05686e]",
            }}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <div className="md:flex mt-[-10px] ">
                    <AvatarButton type={item.id}/>          
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
      <div>
        <AvatarCard type={selected} />
      </div>
    </div>
  );
};

export default AvatarSection;
