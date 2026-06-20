import { useEffect } from 'react';
import $ from 'jquery';

const useOwlCarousel = (selector: string, options: OwlCarousel.Options) => {
	useEffect(() => {
		const win = window as Window & typeof globalThis & { jQuery?: typeof $; $?: typeof $ };
		win.jQuery = $;
		win.$ = $;

		const $carousel = $(selector);
		let destroyed = false;

		void import('owl.carousel/dist/owl.carousel.js').then(() => {
			if (destroyed || !$carousel.length || typeof $carousel.owlCarousel !== 'function') {
				return;
			}

			$carousel.owlCarousel(options);
		});

		return () => {
			destroyed = true;

			if ($carousel.hasClass('owl-loaded')) {
				$carousel.owlCarousel('destroy');
			}
		};
	}, [selector, options]);
};

export default useOwlCarousel;
