import { Box, Typography, Grid, Container } from "@mui/material";
import MenuCard from "./MenuCard";

const Menu = () => {
	return (
		<Box
			padding={5}
			sx={{ backgroundColor: "#1e1e1e" }}

		>
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<Typography
				variant="headline"
				textAlign="center"
				width="fit-content"
				display="block"
				mb={6}
				sx={{
					position: "relative",
					whiteSpace: "nowrap",
					"&:after": {
						content: '""',
						position: "absolute",
						left: 0,
						right: 0,
						bottom: "calc(0.3125em * -0.625)",
						height: "0.3125em",
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%23fff' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\")",
						backgroundSize: "auto 100%",
						backgroundRepeat: "round",
						backgroundPosition: "0em",
						strokeWidth: "3px",
						strokeDasharray: "1045",
						animate: "fillAnimation 5s"
					},
					"@keyframes fillAnimation": {
						strokeDashoffset: "1045",
						"100%": { strokeDashoffset: "0" },
					  },
				}}
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
