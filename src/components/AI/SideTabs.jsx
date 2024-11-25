import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Component,
  MailPlus,
  MessageSquare,
  Settings,
  Stamp,
  Shapes,
  Users,
  Workflow,
  FileCog,
  ChevronRight,
  Upload,
} from "lucide-react";
import React, {  useState } from "react";
import { Tooltip } from "@mui/material";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className=" border-[#05686e] border-l-2"
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 1, width: "300px"}}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        height: "calc(100vh-101px)",
        position: "relative",
        // marginTop: !isActiveUpload && 4,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="easedraft side navigation"
        sx={{
          borderLeft: 1,
          backgroundColor: "#4A9B9F",
          borderColor: "divider",
          "& .MuiTabs-root": {
            minWidth: "40px",
          },
          "& .MuiTabs-vertical": { minWidth: "40px" },
          "& .Mui-selected": {
            backgroundColor: "#05686E",
          },
          "& .MuiTab-root": {
            minWidth: "40px",
          },
        }}
      >
        <Tooltip title="Contents" placement="left">
          <Tab
            icon={<Component color="#ffffff" className="pe-1" />}
            {...a11yProps(0)}
          />
        </Tooltip>
        <Tooltip title="Elements" placement="left">
          <Tab
            icon={<Shapes color="#ffffff" className="pe-1" />}
            {...a11yProps(0)}
          />
        </Tooltip>
        <Tooltip title="Upload" placement="left">
          <Tab
            icon={<Upload color="#ffffff" className="pe-1" />}
            {...a11yProps(0)}
          />
        </Tooltip>
        <Tooltip title="Page Setup" placement="left">
          <Tab
            icon={<FileCog color="#ffffff" className="pe-1" />}
            {...a11yProps(0)}
          />
        </Tooltip>
        <Tooltip title="Participants" placement="left">
          <Tab
            icon={<Users color="#ffffff" className="pe-1" />}
            {...a11yProps(1)}
          />
        </Tooltip>
        <Tooltip title="Workflow" placement="left">
          <Tab
            icon={<Workflow color="#ffffff" className="pe-1" />}
            {...a11yProps(2)}
          />
        </Tooltip>
        <Tooltip
          title={"Chat"}
          placement="left"
        >
          {/* disabled={!participants?.collaborators?.length > 0} */}
          <Tab
            icon={<MessageSquare color="#ffffff" className="pe-1" />}
            {...a11yProps(3)}
          />
        </Tooltip>
        <Tooltip title="Email" placement="left">
          <Tab
            icon={<MailPlus color="#ffffff" className="pe-1" />}
            {...a11yProps(4)}
          />
        </Tooltip>
        <Tooltip title="Settings" placement="left">
          <Tab
            icon={<Settings color="#ffffff" className="pe-1" />}
            {...a11yProps(5)}
          />
        </Tooltip>
        <Tooltip title="Stamp" placement="left">
          <Tab
            icon={<Stamp color="#ffffff" className="pe-1" />}
            {...a11yProps(5)}
          />
        </Tooltip>
      </Tabs>
      <TabPanel value={value} index={0} sx={{}}>
        <div className="border-l h-full">
        Tab 1
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        tab4
      </TabPanel>
      <TabPanel value={value} index={4}>
        tab 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        tab 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        tab 7
      </TabPanel>
      <TabPanel value={value} index={7}>
        tab 8
      </TabPanel>
      <TabPanel value={value} index={8}>
        tab 9
      </TabPanel>
      <TabPanel value={value} index={9}>
        tab 10
      </TabPanel>
      <TabPanel value={value} index={10}>
        atb 11
      </TabPanel>
      {/* {value !== null && (
        <span
          className="absolute flex items-center justify-start top-[35%] -left-[12px] z-49 cursor-pointer border-[#05686e] border"
          onClick={() => {
            setValue(null);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "scale(2) rotate(180deg)",
            }}
            viewBox="0 0 13 96"
            width="13"
            height="96"
            fill="none"
            class="IrLwCg"
          >
            <path
              fill="#15151300"
              d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"
            ></path>
            <path
              fill="#FFF"
              d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"
            ></path>
          </svg>
          <span className="absolute">
            <ChevronRight size={18} />
          </span>
        </span>
      )} */}
      {value !== null && (
        <div
        onClick={() => {
          setValue(null);
        }}
        style={{
            backgroundColor :(value || value === 0) ? "white" : "#05686E",
            color :(value || value === 0) ?  "#05686E" :  "white"
        }}
        className="absolute top-[calc(50%-78px)] -left-[27px] px-1 border-t-2 border-b-2 cursor-pointer py-8 border-l-2 border-[#05686E]  bg-white rounded-l-[3rem]"
      >
        <ChevronRight
          size={18}
          color='#05686e'
          className={`transition-all duration-1000 ${
            value===null ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      )}
    </Box>
  );
};
export default VerticalTabs;
