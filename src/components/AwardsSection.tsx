import React from 'react';

interface AwardItem {
	id: number;
	image: string;
}

interface AwardsSectionProps {
	awards: AwardItem[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
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
