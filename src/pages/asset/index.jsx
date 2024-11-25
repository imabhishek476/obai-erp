import Navbar from "../../components/Navbar/Navbar";
import VideoAsset from "../../components/Asset/VideoAsset";
import SideNav from "../../components/Navbar/SideNav/Dashboard/SideNav";
import React from "react";
const index = ({document}) => {
  return (
    <>
        <SideNav />
			<Navbar
				hideLogo={true}
				content={{
					title: "Asset",
					// comp: true,
				}}
				videoButton={true}
				footer={document.footer}
			/>
            <VideoAsset/>
    </>
  )
}

export default index

export const getServerSideProps = async () => {
	const data = await fetch(
		"https://plp-home-ui.s3.ap-south-1.amazonaws.com/index.json",
		{ cache: "no-store" }
	);
	const DocumentObject = await data.json();
	return { props: { document: DocumentObject } };
};
