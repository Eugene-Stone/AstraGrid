import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

interface Slide {
	id: number;
	title: string;
	description: string;
	image: string;
}

interface ServiceItem {
	id: number;
	icon: string;
	title: string;
	description: string;
}

interface NewsItem {
	id: number;
	date: string;
	type: string;
	title: string;
	brief: string;
	link: string;
	image: string;
}

interface AwardItem {
	id: number;
	image: string;
}

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

import { Slide, ServiceItem, NewsItem, AwardItem } from './types';

function App() {
	const [slides, setSlides] = useState<Slide[]>([]);
	const [services, setServices] = useState<ServiceItem[]>([]);
	const [news, setNews] = useState<NewsItem[]>([]);
	const [awards, setAwards] = useState<AwardItem[]>([]);

	useEffect(() => {
		// Fetch data from db.json using json-server
		const fetchData = async () => {
			try {
				const slidesResponse = await fetch('http://localhost:3000/slides');
				const slidesData = await slidesResponse.json();
				setSlides(slidesData);

				const servicesResponse = await fetch('http://localhost:3000/services');
				const servicesData = await servicesResponse.json();
				setServices(servicesData);

				const newsResponse = await fetch('http://localhost:3000/news');
				const newsData = await newsResponse.json();
				setNews(newsData);

				const awardsResponse = await fetch('http://localhost:3000/awards');
				const awardsData = await awardsResponse.json();
				setAwards(awardsData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="layout">
				<div className="home-wrap">
					<HeroSection slides={slides} />
					<ServicesSection services={services} />
					<NewsSection news={news} />
					<AwardsSection awards={awards} />
					<ContactSection />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
