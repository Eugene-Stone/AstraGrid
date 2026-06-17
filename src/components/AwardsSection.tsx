import React from 'react';
import useOwlCarousel from '../hooks/useOwlCarousel';

interface AwardItem {
	id: number;
	image: string;
}

interface AwardsSectionProps {
	awards: AwardItem[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
	useOwlCarousel('.awards-slider', {
		items: 3,
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		margin: 30,
		navText: ['<i class="arr_l-ic"></i>', '<i class="arr_r-ic"></i>'],
		dotsContainer: '.awards-slider-wrap .dots-nav',
		navContainer: '.awards-slider-wrap .slider-nav',
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
		<section className="sect-awards">
			<div className="container">
				<div className="title-wrap">
					<h2 className="h2-title">Accolades</h2>
				</div>

				<div className="awards-slider-wrap">
					<div className="awards-slider">
						{awards.map((award) => (
							<div className="awards-itm" key={award.id}>
								<img src={award.image} alt="image" />
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

export default AwardsSection;
