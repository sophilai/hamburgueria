import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import BottomBanner from "./components/Banner/BottomBanner";

import "./assets/styles/fonts.css";

function App() {

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Hero />
				<Carousel />
				<Menu />
				<BottomBanner />
				<Footer />
			</ThemeProvider>
			
		</>
	);
}

export default App;
