import React from "react";
import { useTheme } from "@mui/material/styles";
// import Div from "@jumbo/shared/Div";
import { Button, MobileStepper, Typography } from "@mui/material";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
// import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
// import { ASSET_IMAGES } from "../../utils/constants/paths";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const images = [
	{
		label: "Draft Smarter, Sign Easier", //"Future of Legal Practice"
		description: "Transforming the way we draft, edit, and sign agreements.",
		imgPath: `/images/hero_header_circle.svg`,
		width: 500,
		height: 500,
	},
];
const SwipeableTextMobileStepper = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		if (activeStep !== step) {
			setActiveStep({ activeStep: step });
		}
	};

	const handleChange = (index) => {
		setActiveStep(index % 3);
	};

	// const styles = {
	//   slide: {
	//     padding: 15,
	//     minHeight: 100,
	//     color: '#fff',
	//   },
	//   slide1: {
	//     backgroundColor: '#FEA900',
	//   },
	//   slide2: {
	//     backgroundColor: '#B3DC4A',
	//   },
	//   slide3: {
	//     backgroundColor: '#6AC0FF',
	//   },
	// };
	return (
		<Carousel
			navButtonsAlwaysInvisible={true}
			sx={{
				width: "90%",
				height: "50vh",
				// display: "flex",
				// flexDirection: "column",
				// alignItems: "center",
			}}
			autoPlay={false}
			animation="slide"
			index={activeStep}
			onChangeIndex={handleChange}
			//   indicatorIconButtonProps={{
			//     style: {
			//         padding: '0.475rem',    // 1
			//         // color: '#dbdfea' ,
			//         // '&:hover':{
			//         //   backgroundColor:"#f5f6fa"
			//         // }      // 3
			//     }
			// }}
			// activeIndicatorIconButtonProps={{
			//     style: {
			//         color:'black',
			//         backgroundColor:"#f5f6fa"
			//     }
			// }}
		>
			{images.map((ele, key) => {
				return (
					<div
						textAlign="center"
						key={key}
						style={{
							display: "flex",
							flexDirection: "column",
							// height: "50vh",
							justifyContent: "space-around",
							alignItems: "center",
							position: "relative",
							top: "-30px",
						}}
					>
						<Image
							src={images[key].imgPath}
							width={images[key].width}
							height={images[key].height}
							alt=""
							style={{ marginBottom: 20, aspectRatio: 3 / 2 }}
						/>
						<Typography
							variant="h4"
							sx={{
								fontSize: "1.5rem",
								letterSpacing: "-0.02rem",
								mb: "0.5rem",
								mt: "0",
								fontFamily: theme.typography[3],
								fontWeight: "700",
								lineHeight: "1.1",
								color: "#364a63",
							}}
						>
							{images[key].label}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: "#151513",
								lineHeight: "1.15",
								fontWeight: "400",
								fontSize: "0.875rem",
								fontFamily: theme.typography[2],
							}}
						>
							{images[key].description}
						</Typography>
					</div>
				);
			})}
		</Carousel>
	);
};

export default SwipeableTextMobileStepper;

{
	/* <Carousel
        showArrows={false}
        showIndicators={false}
        interval={2000}
        showStatus={false}
        onChange={handleStepChange}
        selectedItem={activeStep}
        showThumbs={false}
        swipeable={true}
      >
        {images.map((item, index) => (
          <div key={item.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { sm: "200", lg: "300" },
                  display: "block",
                  maxWidth: 500,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={item.imgPath}
                alt={item.label}
              />
            ) : null}
          </div>
        ))}
      </Carousel> */
}
