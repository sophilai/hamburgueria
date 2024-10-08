import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import BottomBanner from "../components/Banner/BottomBanner";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Carousel />
			<Menu />
			<BottomBanner />
		</>
	);
};

export default HomePage;
