import { Box, Typography, Container, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BottomBanner = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#bf2626",
				padding: "48px 0px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Grid container justifyContent={{ xs: "center", md: "space-between" }} alignItems="center" rowSpacing={4} columnSpacing={4} >
					<Grid item>
						<Button
							variant="underlined"
							endIcon={<ArrowForwardIcon sx={{ fontSize: "40px!important" }} />}
							sx={{
								backgroundColor: "#fdbd10",
								color: "#bf2626",
							}}
						>
							Fazer pedido
						</Button>
					</Grid>
					<Grid item>
						<Typography sx={{ fontSize: "2rem" }}>lane@lane.com.br</Typography>
					</Grid>
					<Grid item>
						<Typography sx={{ fontSize: "2rem" }}>(11) 928392-8328</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default BottomBanner;
