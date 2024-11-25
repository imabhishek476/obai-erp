import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import VCard from "./VCard";
import DraftAsset from "./DraftAsset";
import DragDraft from "./DragDraft";
import { IconButton } from "@mui/material";
import { Play, UploadCloud } from "lucide-react";

const AssetSection = () => {
  const [selected, setSelected] = React.useState("all");

  let tabs = [
    {
      id: "all",
      label: "All",
      content: "",
    },
    {
      id: "image",
      label: "Image",
      content: "",
    },
    {
      id: "video",
      label: "Video",
      content: "",
    },
    {
      id: "audio",
      label: "Audio",
      content: "",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className=" md:flex justify-between items-center my-4">
        <div className="font-bold flex md:flex-row flex-col text-lg subpixel-antialiased my-2">
          <p className="px-2">Personal Items (4)</p>
        </div>
        <div className="my-2 mx-2 px-1 flex gap-2">
          <div className="flex items-center justify-center">
            <label
              htmlFor="uploadFile1"
              className="hover:bg-gray-200 h-[30px] text-black border-2 text-sm px-4 outline-none rounded cursor-pointer flex items-center "
            >
              <span>
                <UploadCloud size={15} />
              </span>
              Upload
            </label>
            <input type="file" id="uploadFile1" className="hidden" />
          </div>

          <Tabs
            aria-label="Dynamic tabs"
            selectedKey={selected}
            onSelectionChange={setSelected}
            items={tabs}
            className=" w-[200px] md:w-[260px]"
            classNames={{ 
              tab: "rounded-sm",
              tabContent: "group-data-[selected=true]:text-[#05686e]",
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
      {selected === "all" && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
          <DraftAsset />
          <VCard />
          <VCard />
          {/* <VCard /> */}
        </div>
      )}
      {selected === "image" && (
        <div className="flex justify-center items-center">
          <DragDraft />
        </div>
      )}
      {selected === "video" && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
          <VCard />
          <VCard />
          <VCard />
        </div>
      )}
      {selected === "draft" && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2.5">
          <DraftAsset />
        </div>
      )}
      {selected === "audio" && (
        <div className="flex justify-center items-center">
          <DragDraft />
        </div>
      )}
    </div>
  );
};

export default AssetSection;
