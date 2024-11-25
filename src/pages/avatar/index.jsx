import Navbar from "../../components/Navbar/Navbar";
import Avatar from "../../components/Avatar/Videoo";
import SideNav from "../../components/Navbar/SideNav/Dashboard/SideNav";
import React from "react";
const index = ({document}) => {
  return (
    <>
        <SideNav />
			<Navbar
				hideLogo={true}
				content={{
					title: "Avatar",
					// comp: true,
				}}
				videoButton={true}
				footer={document.footer}
			/>
            <Avatar />
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
