import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#bf2626",
			dark: "#73061a",
			light: "#c43225",
		},
		secondary: {
			main: "#f29e38",
			light: "#f2b138",
		},
		background: {
			default: "#f4f6f8",
		},
		text: {
			primary: "#ffffff",
			secondary: "#f5f5f5",
		},
	},
	typography: {
		fontFamily: '"Outfit", sans-serif',
		h1: {
			fontSize: "3rem",
			fontWeight: 700,
			fontFamily: '"RobotoSlab", sans-serif',
		},
		h2: {
			fontSize: "2rem",
		},
		h5: {
			fontFamily: '"RobotoSlab", sans-serif',
			fontWeight: 900

		},
		body1: {
			fontSize: "1rem",
		},
		headline: {
			fontFamily: '"RobotoSlab", sans-serif',
			fontSize: "5em",
			fontWeight: 800
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "button53" },
					style: {
						backgroundColor: "#73061a",
						border: "0 solid #E5E7EB",
						color: "#ffffff",
						display: "flex",
						fontSize: "1rem",
						fontWeight: 700,
						justifyContent: "center",
						lineHeight: "1.75rem",
						padding: ".75rem 1.65rem",
						width: "100%",
						maxWidth: "460px",
						cursor: "pointer",
						transform: "rotate(-2deg)",
						userSelect: "none",
						WebkitUserSelect: "none",
						touchAction: "manipulation",
						position: "relative",
						textAlign: "center",
						textDecoration: "none",
						"&:hover": {
							backgroundColor: "#c43225",
						},
						"&:after": {
							content: '""',
							position: "absolute",
							border: "1px solid #000000",
							bottom: "4px",
							left: "4px",
							width: "calc(100% - 1px)",
							height: "calc(100% - 1px)",
							transition: 'bottom 0.3s ease, left 0.3s ease'
						},
						"&:hover:after": {
							bottom: "2px",
							left: "2px",
						},
						"@media (min-width: 768px)": {
							padding: ".75rem 3rem",
							fontSize: "1.25rem",
						},
					},
				},
			],
		},
	},
});

export default theme;
