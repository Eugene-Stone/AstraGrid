import Carousel from './Carousel';
import type { Slide } from '../types';

interface HeroSectionProps {
	slides: Slide[];
}

const HeroSection = ({ slides }: HeroSectionProps) => (
	<div className="home-slider-wrap">
		<Carousel
			className="home-slider"
			items={slides}
			slidesToShow={1}
			autoplayDelay={5000}
			renderItem={(slide) => (
				<div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
					<div className="slide-inner">
						<div className="container">
							<div className="home-slide-txt">
								<div className="h1-title">{slide.title}</div>
								<div className="slide-descr">{slide.description}</div>
								<div className="btn-wrap">
									<a href="#" className="btn">
										Get Started
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		/>
	</div>
);

export default HeroSection;
