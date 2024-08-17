import { Box, Typography, Container, Button } from "@mui/material";
import image from "../../assets/images/hero2.jpg";
const Hero = () => {
	return (
		<Box
			width="100%"
			sx={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: {
					xs: "80vh",
					md: "100vh",
				},
				maxHeight: {
					xs: "500px",
					md: "768px",
				},
			}}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					textAlign="center"
					variant="h1"
					mb={1}

				>
					Hamburgueria da Lane
				</Typography>
				<Typography textAlign="center" variant="h2" mb={4}>
					Lorem Ipsum Sit Dolum.
				</Typography>
				<Button variant="button53" size="large" sx={{ width: "fit-content" }}>
					Peça Agora
				</Button>
			</Container>
		</Box>
	);
};

export default Hero;
