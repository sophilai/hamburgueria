import { Box, Typography, Grid, Container } from "@mui/material";
import MenuCard from "./MenuCard";

const Menu = () => {
	return (
		<Box padding={5} sx={{ backgroundColor: "#1e1e1e" }}>
			<Container
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<Typography
					variant="headlineWithUnderline"
					mb={6}
				>
					Cardápio
				</Typography>
				<Grid
					container
					rowSpacing={{ xs: 1, sm: 2, md: 3 }}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					width="100%"
				>
					<Grid item xs={12} sm={6} md={4}>
						<MenuCard name="X-Bacon" photo="/assets/xbacon.jpg" />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MenuCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MenuCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<MenuCard />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Menu;
