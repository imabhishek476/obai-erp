import React, { useEffect, useState } from "react";
import { CardContent, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
// import { useLocation } from "react-router-dom";
// import SwipeableTextMobileStepper from "../../components/SwipeableTextMobileStepper";
import Otp from "../otp";
// import LoginFooter from "app/pages/components/LoginFooter";
// import { generateOtp } from "app/Apis/Login";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import Animation from "app/pages/components/Animations/Animation";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
// import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
// import Div from "@/components/Shared/Div/Div";
import Div from "../../../../components/Shared/Div/Div";
import SwipeableTextMobileStepper from "../../components/SwipeableTextMobileStepper";
import LoginFooter from "../../components/LoginFooter";
// import { generateOtp, getUserProfile } from "@/Apis/login";
import { generateOtp, getUserProfile } from "../../../../Apis/login";
import Animation from "../../components/Animations/Animation";
import { useSearchParams } from "next/navigation";
import { Nunito } from "next/font/google";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import SocialButtons from "./socialbutton/SocialButtons";

const nunito = Nunito({ subsets: ["latin"] });

const Login = ({ disableSmLogin, editNumber }) => {
	// const theme = useTheme();
	const isBelow990px = useMediaQuery((theme) => theme.breakpoints.down(990));

	useEffect(() => {
		console.log("is mobile", disableSmLogin);
	}, [disableSmLogin]);

	const queryParameters = useSearchParams();
	const router = useRouter();
	const phoneUrl = queryParameters.get("phoneNumber");
	const [isLoading, setIsLoading] = useState(false);

	const [showOtp, setShowOtp] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [error, setError] = useState("");

	const handleChange = (event) => {
		setPhoneNumber(event.target.value);
	};
	const getOtp = async () => {
		if (phoneNumber) {
			const response = await generateOtp(phoneNumber);
		} else {
			const response = await generateOtp(phoneUrl);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phoneNumber)
		) {
			setShowOtp(true);
			setError("");
			getOtp();
		} else {
			setError("Enter a valid phone number");
			setTimeout(() => {
				setError("");
			}, 4000);
		}
	};
	useEffect(() => {
		if (phoneUrl) {
			if (
				/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phoneUrl)
			) {
				setShowOtp(true);
				getOtp();
			} else {
				setError("Enter a valid phone number");
			}
		}
		if (editNumber) {
			setPhoneNumber(editNumber);
		}
	}, [phoneUrl]);

	useEffect(() => {
		if (queryParameters.get("jwt")) {
			console.log(queryParameters.get("jwt"));
			getUserProfile(queryParameters.get("jwt"))
				.then((user) => {
					Cookies.set("accessToken", queryParameters.get("jwt"), {
						expires: 1,
					});
					Cookies.set("id", user?.data.id, {
						expires: 1,
					});
					Cookies.set("isLoggedIn", true);
					router.push(`/document/new?id=${queryParameters.get("id")}`);
				})
				.catch((err) => console.log(err.message));
		}
	}, []);

	return (
		<>
			{isLoading ? <Animation /> : null}
			{showOtp ? (
				<Otp
					phoneNumber={phoneNumber ? phoneNumber : phoneUrl}
					disableSmLogin={disableSmLogin}
				/>
			) : (
				// <Div
				//   sx={{
				//     width: "100%",
				//     height: "100vh",
				//     margin: "auto",
				//     backgroundColor: "#FFFFFF",
				//   }}
				// >
				<Div
					className={`${nunito.className}`}
					sx={{
						backgroundColor: "#FFFFFF",
						margin: 0,
						display: "flex",
						// flex: "1 1",
						minWidth: 0,
						flexDirection: { xs: "column", md: "row" },
						height: "90vh",
						borderRadius: "0",
					}}
				>
					<Div className="w-full flex h-full flex-col justify-between items-center">
						<Div
							sx={{
								flex: "1",
								display: "flex",
								justifyContent: "flex-end",
								flexDirection: "column",
								my: "10%",
								marginLeft: "auto",
								marginBottom: "12%",
								marginRight: isBelow990px ? "auto" : "15%",
								width: "380px",
								padding: "20px",
							}}
						>
							<Div
								sx={{
									display: "flex",
									mb: 1,
								}}
							>
								<Link href="https://easedraft.com">
									<Image
										src={`/images/Colibri.png`}
										width={210}
										height={50}
										style={{
											objectFit: "contain",
											// width: "60px",
											marginBottom: "10px",
											// width: "150px",
										}}
										alt="Lawinzo"
									/>
								</Link>
							</Div>
							<Typography
								variant={"h2"}
								className={nunito.className}
								sx={{
									color: "#364a63",
									fontSize: "1.25rem",
									fontWeight: "700",

									mb: 2,
								}}
							>
								Access the EaseDraft Panel
							</Typography>

							<form onSubmit={handleSubmit} autoComplete="off">
								<Div
									sx={{ mb: 4, color: "#3c4d62", fontWeight: "400", mt: 2.9 }}
								>
									<label>
										<TextField
											fullWidth
											className={nunito.className}
											id="Enter Mobile Number"
											label="Enter Mobile Number"
											type="tel"
											color="secondary"
											onChange={handleChange}
											value={phoneNumber}
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														<PersonIcon />
													</InputAdornment>
												),
												maxlength: 10,
											}}
											required
										/>
									</label>
									{error && (
										<Div sx={{ display: "flex", alignItems: "center" }}>
											<ErrorOutlineIcon color="error" fontSize="small" />
											<Typography
												sx={{
													color: "red",
													fontSize: "12px",
													ml: 1,
												}}
											>
												{error}
											</Typography>
										</Div>
									)}
								</Div>

								<Div sx={{ display: "flex", alignItems: "center", mb: 2 }}>
									<Div sx={{ display: "flex" }}>
										<Typography
											className={nunito.className}
											sx={{
												fontFamily: "Roboto, sans-serif",
												fontSize: "0.875rem",
												fontWeight: "550",
												marginBottom: "0.5rem",
												color: "#344357",
											}}
										>
											{" "}
											By continuing, I agree to EaseDraft's{" "}
											<Link
												href="https://easedraft.com/privacy-policy"
												underline="none"
												sx={{
													color: "#E8713C",
													cursor: "pointer",
													"&:hover": {
														color: "#D94300",
													},
												}}
												target="_blank"
												rel="noreferrer"
												className={nunito.className}
											>
												Privacy Policy
											</Link>{" "}
											and{" "}
											<Link
												href="https://easedraft.com/terms-and-conditions"
												underline="none"
												sx={{
													color: "#E8713C",
													"&:hover": {
														color: "#D94300",
													},
												}}
												target="_blank"
												rel="noreferrer"
												className={nunito.className}
											>
												Terms & Conditions,
											</Link>
											and receive communication from EaseDraft via SMS, E-Mail
											and WhatsApp
										</Typography>
									</Div>
								</Div>
								<Button
									fullWidth
									type="submit"
									variant="contained"
									size="large"
									disableElevation
									className={`bg-[#E8713C] rounded-sm text-white hover:bg-[#D94300] ${nunito.className} font-extrabold items-center`}
									// style={{
									// 	backgroundColor: "#E8713C",
									// }}
									// sx={{
									// 	mb: 4,
									// 	backgroundColor: "#E8713C",
									// 	position: "relative",
									// 	letterSpacing: "0.02em",
									// 	alignItems: "center",
									// 	fontFamily: "Nunito, sans-serif",
									// 	fontWeight: "900",
									// 	"&:hover": {
									// 		backgroundColor: "#D94300",
									// 		color: "white",
									// 	},
									// }}
									// onClick={getOtp}
								>
									Get OTP
								</Button>
							</form>

							<React.Fragment>
								<Typography
									variant={"h6"}
									mb={2}
									pt={4}
									pb={3}
									sx={{
										textAlign: "center",
										paddingTop: "0",
										paddingBottom: "0",
										color: "#B6C6E3",
										fontSize: "11px",
										fontWeight: "700",
										lineHeight: "1.2",
										marginTop: "20px",
										letterSpacing: "0.2em",
									}}
								>
									<span>-OTHER LOGIN OPTION-</span>
								</Typography>
								<SocialButtons />
							</React.Fragment>
						</Div>
						<Div
							sx={{
								flex: "1 ",
								display: "flex",
								my: "10%",
								width: "380px",
								maxHeight: "25%",
								marginLeft: "auto",
								marginBottom: "2%",
								marginRight: isBelow990px ? "auto" : "15%",
								marginTop: 0,
								padding: "20px",
								justifyContent: "center",
								alignContent: "center",
							}}
						>
							<LoginFooter />
						</Div>
					</Div>
					{!disableSmLogin && (
						<Div
							// className="hidden sm:flex bg-[#f5f6fa] h-screen w-full"
							sx={{
								height: "100dvh",
								display: {sm:"flex",xs:'none',xxs:'none'},
								width: "100%",
								alignItems: "center",
								justifyContent: "center",
								flexWrap: "wrap",
								padding: "2%",
								textAlign: "center",
								backgroundColor:'#f5f6fa'
							}}
						>
							<SwipeableTextMobileStepper />
						</Div>
					)}
				</Div>
				// </Div>
			)}
		</>
	);
};

export default Login;
