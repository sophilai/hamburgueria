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
			dark: "#1e1e1e",
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
			fontWeight: 900,
		},
		body1: {
			fontSize: "1rem",
		},
		headline: {
			fontFamily: '"RobotoSlab", sans-serif',
			fontSize: "5em",
			fontWeight: 800,
		},
		headlineWithUnderline: {
			fontFamily: '"RobotoSlab", sans-serif',
			fontSize: "5em",
			fontWeight: 800,
			position: "relative",
			whiteSpace: "nowrap",
			textAlign: "center",
			width: "fit-content",
			display: "block",
			marginBottom: "1.5rem",
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
			},
		},
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
							transition: "bottom 0.3s ease, left 0.3s ease",
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
				{
					props: { variant: "underlined" },
					style: {
						color: "white",
						fontSize: "1.25rem",
						fontFamily: "RobotoSlab",
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"& .MuiButton-endIcon": {
							transform: "translateX(0px)",
							transition: "transform 0.3s",
						},
						"&:hover .MuiButton-endIcon": {
							transform: "translateX(5px)",
							transition: "transform 0.3s",
						},
						"&::after": {
							content: '""',
							position: "absolute",
							width: "0%",
							height: "2px",
							bottom: "6px",
							left: "8px",
							backgroundColor: "#bf2626",
							transition: "width 0.3s ease",
							zIndex: "1",
						},
						"&:hover::after": {
							width: "92%",
						},
						"&:hover": {
							backgroundColor: "#fdbd10",
						},
						"@media (min-width: 768px)": {
							fontSize: "2rem",
						},
					},
				},
			],
		},
	},
});

export default theme;
