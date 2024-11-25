// import SideNav from "@/components/Navbar/SideNav/Dashboard/SideNav";
import SideNav from "../../components/Navbar/SideNav/Dashboard/SideNav";
import React from "react";
import Video from "../../components/Video/Video"

const index = ({ document }) => {
  return (
    <>
      <SideNav />
      <Video document={document}/>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://plp-home-ui.s3.ap-south-1.amazonaws.com/index.json",
    { cache: "no-store" }
  );
  const DocumentObject = await data.json();
  return { props: { document: DocumentObject } };
};
