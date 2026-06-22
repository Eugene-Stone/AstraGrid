import Carousel from './Carousel';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
	services: ServiceItem[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => (
	<section className="sect-serv">
		<div className="container">
			<div className="title-wrap">
				<h2 className="h2-title">Services</h2>
			</div>

			<div className="serv-slider-wrap">
				<Carousel
					className="serv-slider"
					items={services}
					autoplayDelay={5000}
					slidesToShow={3}
					renderItem={(service) => (
						<div className="serv-itm">
							<div
								className="serv-ic"
								style={{ backgroundImage: `url(${service.icon})` }}></div>
							<div className="serv-title">{service.title}</div>
							<div className="serv-descr">{service.description}</div>
							<div className="btn-wrap">
								<a href={service.href ?? '#'} className="btn" data-spa-link={service.href ? true : undefined}>
									Learn More
								</a>
							</div>
						</div>
					)}
				/>
			</div>
		</div>
	</section>
);

export default ServicesSection;
