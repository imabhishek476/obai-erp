// import Navbar from "@/components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";
// import SideNav from "@/components/Navbar/SideNav/Dashboard/SideNav";
import SideNav from "../../components/Navbar/SideNav/Dashboard/SideNav";
// import Team from "@/components/Team/Team";
import Team from "../../components/Team/Team";
import React from "react";

const index = ({ document }) => {
	return (
		<>
			<SideNav />
			<Navbar
				hideLogo={true}
				content={{
					title: "Team",
					comp: false,
                    save:{title:"New Team Member",link:""}
				}}
				footer={document.footer}
			/>
			<Team />
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
