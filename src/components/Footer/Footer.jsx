import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';

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
				<Grid container spacing={2} md={12} >
					<Grid item xs={12} md={4}>
						<Box display="flex" flexDirection="column" gap="10px">
							<Typography variant="h5">Coluna 1</Typography>
							<Typography>Linha 1</Typography>
							<Typography>Linha 2</Typography>
							<Typography>Linha 3</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box display="flex" flexDirection="column" gap="10px">
							<Typography variant="h5">Coluna 2</Typography>
							<Typography>Linha 1</Typography>
							<Typography>Linha 2</Typography>
							<Typography>Linha 3</Typography>
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
