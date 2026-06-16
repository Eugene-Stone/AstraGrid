import { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';

const useOwlCarousel = (selector: string, options: OwlCarousel.Options) => {
	useEffect(() => {
		const $carousel = $(selector);

		if ($carousel.length) {
			$carousel.owlCarousel(options);
		}

		return () => {
			if ($carousel.hasClass('owl-loaded')) {
				$carousel.owlCarousel('destroy');
			}
		};
	}, [selector, options]);
};

export default useOwlCarousel;
