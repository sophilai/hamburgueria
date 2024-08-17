import { Box, Typography, Button } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
	const images = [
		{ src: "/assets/hotdog.jpg", alt: "Delicioso hotdog", text: "Hot Dogs" },
		{ src: "/assets/burger.jpg", alt: "Saboroso burger", text: "Hamburgers" },
		{ src: "/assets/hero.jpg", alt: "Banner principal", text: "Promoções" },
		{ src: "/assets/hotdog.jpg", alt: "Delicioso hotdog", text: "Hot Dogs" },
		{ src: "/assets/burger.jpg", alt: "Saboroso burger", text: "Hamburgers" },
		{ src: "/assets/hero.jpg", alt: "Banner principal", text: "Promoções" },
	];
	return (
		<Box
			width="100%"
			maxHeight="100vh"
			display="flex"
			sx={{
				".swiper-button-next, .swiper-button-prev": {
					color: "#ffffff",
					fontSize: "20px",
					"&:hover": {
						color: "#ffffff",
					},
				},
			}}
		>
			<Swiper
				navigation
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Box
							component="img"
							src={image.src}
							alt={image.alt}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "center",
							}}
						/>
						<Box
							position="absolute"
							top="50%"
							left="50%"
							sx={{
								transform: "translate(-50%, -50%)",
								textAlign: "center",
							}}
						>
							<Button variant="button53" size="large">
								{image.text}
							</Button>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Carousel;
