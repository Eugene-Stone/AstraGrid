import useOwlCarousel from '../hooks/useOwlCarousel';
import type { Slide } from '../types';

interface HeroSectionProps {
	slides: Slide[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
	useOwlCarousel('.home-slider', {
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		animateOut: 'fadeOut',
		navText: ['<i class="arr_l-ic"></i>', '<i class="arr_r-ic"></i>'],
		dotsContainer: '.dots-nav',
		navContainer: '.slider-nav',
	});

	return (
		<div className="home-slider-wrap">
			<div className="home-slider">
				{slides.map((slide) => (
					<div
						className="slide"
						style={{ backgroundImage: `url(${slide.image})` }}
						key={slide.id}>
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
				))}
			</div>
			<div className="slide-controls">
				<div className="dots-nav"></div>
				<div className="slider-nav"></div>
			</div>
		</div>
	);
};

export default HeroSection;
