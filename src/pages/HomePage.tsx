import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import NewsSection from '../components/NewsSection';
import AwardsSection from '../components/AwardsSection';
import ContactSection from '../components/ContactSection';
import type { AwardItem, NewsItem, ServiceItem, Slide } from '../types';

interface HomePageProps {
	isScrolled: boolean;
	slides: Slide[];
	services: ServiceItem[];
	news: NewsItem[];
	awards: AwardItem[];
}

const HomePage = ({ isScrolled, slides, services, news, awards }: HomePageProps) => (
	<div className="wrapper">
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
		<a href="#root" className={isScrolled ? 'btn-top on' : 'btn-top'} aria-label="Back to top" />
		<div className="modal-set"></div>
	</div>
);

export default HomePage;
