import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfrastructurePage from './pages/InfrastructurePage';
import DefensePage from './pages/DefensePage';
import { getAwards, getNews, getServices, getSlides } from './api';
import type { AwardItem, NewsItem, ServiceItem, Slide } from './types';

function App() {
	const [slides, setSlides] = useState<Slide[]>([]);
	const [services, setServices] = useState<ServiceItem[]>([]);
	const [news, setNews] = useState<NewsItem[]>([]);
	const [awards, setAwards] = useState<AwardItem[]>([]);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [slidesData, servicesData, newsData, awardsData] = await Promise.all([
					getSlides(),
					getServices(),
					getNews(),
					getAwards(),
				]);

				setSlides(slidesData);
				setServices(servicesData);
				setNews(newsData);
				setAwards(awardsData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 200);

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<HomePage
						isScrolled={isScrolled}
						slides={slides}
						services={services}
						news={news}
						awards={awards}
					/>
				}
			/>
			<Route
				path="/infrastructure"
				element={<InfrastructurePage isScrolled={isScrolled} />}
			/>
			<Route path="/defense" element={<DefensePage isScrolled={isScrolled} />} />
		</Routes>
	);
}

export default App;
