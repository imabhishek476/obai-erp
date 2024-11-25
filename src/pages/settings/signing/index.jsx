// import Footer from "@/components/Footer/footer";
import Footer from "../../../components/Footer/footer";
// import Navbar from "@/components/Navbar/Navbar";
import Navbar from "../../../components/Navbar/Navbar";
// import SideNav from "@/components/Navbar/SideNav/Dashboard/SideNav";
import SideNav from "../../../components/Navbar/SideNav/Dashboard/SideNav";
// import Signing from "@/components/Settings/Signing";
import Signing from "../../../components/Settings/Signing";
import React from "react";

const index = ({ document }) => {
	return (
		<>
        	<SideNav /> 
            <Navbar
				hideLogo={true}
				content={{
					title: "Signing Preferences",
					comp: false,
					back:{title:"Setting",link: "/settings"},
                    save:{title:"Save Changes",link:""}
				}}
				footer={document.footer}
                
			/>
            <Signing />
			<Footer footer={document?.footer} />
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