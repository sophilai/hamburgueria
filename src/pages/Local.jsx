import { Box, Container, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Local = () => {
	return (
		<Box
			sx={{
				backgroundColor: "background.dark",
				paddingTop: "100px",
				paddingBottom: "70px",
			}}
		>
			<Container
				sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
			>
				<Typography
					variant="headlineWithUnderline"
					mb={7}
					sx={{
						fontSize: "3em",
						"@media (min-width: 1024px)": {
							fontSize: "4em",
						},
					}}
				>
					Localização
				</Typography>
				<Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
					<Box
						component="img"
						src="/assets/shop.jpg"
						sx={{ maxWidth: "400px" }}
					></Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",

							"@media (min-width: 1024px)": {
								width: "fit-content",
							},
						}}
					>
						<Typography variant="h2" mb={3}>
							Conheça a Hamburgueria
						</Typography>
						<Box display="flex" gap="10px" mb={2} sx={{ alignSelf: "center" }}>
							<LocationOnIcon />
							<Box
								component="a"
								href="https://www.google.com/maps/search/?api=1&query=R.%20Domingos%20Scarpel,%2081%20-%20Jardim%20Belem,%20São%20Paulo%20-%20SP,%2003809-100"
								target="_blank"
							>
								<Typography>Rua Domingos Scarpel, 81 - Jardim Belem</Typography>
							</Box>
						</Box>
						<Box display="flex" gap="10px" mb={2} sx={{ alignSelf: "center" }}>
							<WhatsAppIcon />
							<Box
								component="a"
								target="_blank"
                                href="https://wa.me/11958490842"
							>
								<Typography>(11) 95849-0842</Typography>
							</Box>
						</Box>
						<Typography mb={2}> Temos opção de delivery e retirada!</Typography>
						<Button
							variant="underlined"
							endIcon={<ArrowForwardIcon sx={{ fontSize: "40px!important" }} />}
							sx={{
								backgroundColor: "transparent",
								color: "#bf2626",
								fontSize: "30px",
								width: "fit-content",
								"&:hover": {
									backgroundColor: "transparent",
								},
							}}
						>
							Fazer pedido
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Local;
