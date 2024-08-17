import { Card, Box, Typography } from "@mui/material";

const MenuCard = ({
	name = "Bacon Burger",
	photo = "/assets/thumb.jpg",
	description = "Pão Especial, Maionese da Casa, Hambúrguer prensado, Queijo Cheddar e Bacon em tiras.",
}) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#73061a",
			}}
		>
			<Box
				component="img"
				src={photo}
				mb={1}
				height="200px"
				width="100%"
				sx={{ objectFit: "cover", objectPosition: "bottom" }}
			></Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "12px 24px 24px",
				}}
			>
				<Typography variant="h5" mb={1}>
					{name}
				</Typography>
				<Typography>{description}</Typography>
			</Box>
		</Card>
	);
};

export default MenuCard;
