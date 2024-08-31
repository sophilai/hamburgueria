import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage";

import "./assets/styles/fonts.css";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
