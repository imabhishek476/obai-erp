import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

const listTabs = () => {
  return (
    <div>
      <Tabs variant="underlined" aria-label="Tabs variants">
        <Tab key="photos" title="Photos" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  );
};

export default listTabs;
