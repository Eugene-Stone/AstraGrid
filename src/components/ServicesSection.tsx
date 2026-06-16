import React from 'react';

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
