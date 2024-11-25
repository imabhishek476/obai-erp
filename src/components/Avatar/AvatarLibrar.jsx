import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import StudioLibraryButton from "./LibrarySideButton/StudioLibraryButton";
import AvatarCardLi from "./AvatarCardLi/AvatarCardLi";

const AvatarLibrar = () => {
  const [selected, setSelected] = React.useState("instantAvatar");


  let tabs = [
    {
      id: "instantAvatar",
      label: "Instant Avatar",
      content: "",
    },
    {
      id: "photoAvatar",
      label: "Photo Avatar",
      content: "",
    },
    {
      id: "studioAvatar",
      label: "Studio Avatar",
      content: "",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center my-4">
        <div className="font-bold text-lg subpixel-antialiased my-2">
          <p className="px-2">Avatar Library (4)</p>
        </div>
      </div>
      <div className="flex flex-row justify-between -mt-5 -ml-5">
        <div className="my-2 mx-2 px-1 min-w-[200px]">
          <Tabs
            aria-label="Dynamic tabs"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            items={tabs}
            classNames={{
              tab: "rounded-sm",
              tabContent: "group-data-[selected=true]:text-[#05686e]",
            }}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
              </Tab>
            )}
          </Tabs>
        </div>
        <StudioLibraryButton/>
      </div>
      <AvatarCardLi type={selected} />
       
    </div>
  );
};

export default AvatarLibrar;
