import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundImage: "url(/assets/footer.jpg)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				padding: "50px 0px",
			}}
		>
			<Container>
				<Grid container spacing={2} md={12}>
					<Grid item xs={12} md={4}>
						<Box display="flex" flexDirection="column" gap="10px">
							<Typography variant="h5">Horário</Typography>
							<Typography>Segunda a Sexta: 18 às 22h</Typography>
							<Typography>Sábado: 17h às 23h</Typography>
							<Typography>Domingo: 12h às 23h</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box display="flex" flexDirection="column" gap="10px">
							<Box
								component="a"
								href="/localizacao"
								sx={{ width: "fit-content" }}
							>
								<Typography variant="h5">Localização</Typography>
							</Box>
							<Typography>Rua Domingos Scarpel, 81 - Jardim Belem</Typography>
							<Typography>Delivery ou Retirada</Typography>
							<Typography>Estamos no Ifood</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box display="flex" flexDirection="column" gap="10px">
							<Typography variant="h5">Redes Sociais</Typography>
							<Box display="flex" gap="5px" href="#" component="a">
								<InstagramIcon />
								<Typography>Instagram</Typography>
							</Box>
							<Box display="flex" gap="5px" href="#" component="a">
								<FacebookIcon />
								<Typography>Facebook</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
