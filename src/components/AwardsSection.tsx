import Carousel from './Carousel';
import type { AwardItem } from '../types';
import { assetUrl } from '../utils/assets';

interface AwardsSectionProps {
	awards: AwardItem[];
}

const AwardsSection = ({ awards }: AwardsSectionProps) => (
	<section className="sect-awards">
		<div className="container">
			<div className="title-wrap">
				<h2 className="h2-title">Accolades</h2>
			</div>

			<div className="awards-slider-wrap">
				<Carousel
					className="awards-slider"
					items={awards}
					autoplayDelay={5000}
					slidesToShow={3}
					renderItem={(award) => (
						<div className="awards-itm">
							<img src={assetUrl(award.image)} alt="image" />
						</div>
					)}
				/>
			</div>
		</div>
	</section>
);

export default AwardsSection;
