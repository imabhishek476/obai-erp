import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import VideoCard from "./VideoCard";
import DraftCard from "./DraftCard";

const VideoSection = () => {
  const [selected, setSelected] = React.useState("all");

  let tabs = [
    {
      id: "all",
      label: "All",
      content: ""
    },
    {
      id: "video",
      label: "Video",
      content: ""
    },
    {
      id: "draft",
      label: "Draft",
      content: ""
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center my-4">
        {/* same as outer page heading */}
        <div className="font-bold text-lg subpixel-antialiased my-2">
          <p className="px-2">Personal Items (4)</p>
        </div>
        <div className="my-2 mx-2 px-1">
          <Tabs
            aria-label="Dynamic tabs"
            selectedKey={selected}
            onSelectionChange={setSelected}
            items={tabs}
            classNames={{
              // tabList:
              //   "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              // cursor: "w-full bg-[#22d3ee]",
              tab: "rounded-sm",
              tabContent: "group-data-[selected=true]:text-[#05686e]"
            }}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                {/* <Card>
                  <CardBody>{item.content}</CardBody>
                </Card> */}
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
      {/* render all these through array or using filter */}
      {
        selected==='all' &&
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
        <DraftCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      }
      {
        selected==='video' &&
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      }
      {
        selected==='draft' &&
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
        <DraftCard />
      </div>
      }
    </div>
  );
};

export default VideoSection;
