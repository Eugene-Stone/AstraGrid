import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
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
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 200);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="wrapper">
			<div className="inner-pages">
				<span>inner_pages</span>
				<div className="page-links">
					<a href="">Main</a>
					<a href="infrastructure.html">Infrastructure</a>
					<a href="defense.html">Email Defense</a>
				</div>
			</div>
			<Header isScrolled={isScrolled} />
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
			<div className="loaded"></div>
			<a href="#root" className={isScrolled ? 'btn-top on' : 'btn-top'}>
				<span className="visually-hidden">Back to top</span>
			</a>
			<div className="modal-set"></div>
		</div>
	);
}

export default App;
