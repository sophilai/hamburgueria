import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import Local from "./pages/Local";

import "./assets/styles/fonts.css";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/localizacao" element={<Local />} />
					</Routes>
				</Router>
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
