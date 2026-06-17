import React from 'react';
import useOwlCarousel from '../hooks/useOwlCarousel';

interface ServiceItem {
	id: number;
	icon: string;
	title: string;
	description: string;
}

interface ServicesSectionProps {
	services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
	useOwlCarousel('.serv-slider', {
		items: 3,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		margin: 30,
		navText: ['<i class="arr_l-ic"></i>', '<i class="arr_r-ic"></i>'],
		dotsContainer: '.serv-slider-wrap .dots-nav',
		navContainer: '.serv-slider-wrap .slider-nav',
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});

	return (
		<section className="sect-serv">
			<div className="container">
				<div className="title-wrap">
					<h2 className="h2-title">Services</h2>
				</div>

				<div className="serv-slider-wrap">
					<div className="serv-slider">
						{services.map((service) => (
							<div className="serv-itm" key={service.id}>
								<div
									className="serv-ic"
									style={{ backgroundImage: `url(${service.icon})` }}></div>
								<div className="serv-title">{service.title}</div>
								<div className="serv-descr">{service.description}</div>
								<div className="btn-wrap">
									<a href="#" className="btn">
										Learn More
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="slide-controls">
						<div className="dots-nav"></div>
						<div className="slider-nav"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
