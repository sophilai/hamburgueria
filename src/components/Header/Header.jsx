import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const navItems = [
	{ pageName: "Cardápio", pageUrl: "#" },
	{ pageName: "Localização", pageUrl: "#" },
	{ pageName: "Delivery", pageUrl: "#" },
];

const Header = () => {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block', textWrap: "nowrap" } }} >
					Hamburgueria da Lane
				</Typography>
				<Box display="flex" justifyContent={"flex-end"} sx={{ width: "100%" }}>
					{navItems.map((item) => (
						<Button
							key={item.pageName}
							href={item.pageUrl}
							variant="primary"
						>
							{item.pageName}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
