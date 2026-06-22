import { useEffect, useMemo, useState, type ReactNode } from 'react';

type CarouselProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	className?: string;
	autoplayDelay?: number;
	slidesToShow?: number;
};

const Carousel = <T,>({
	items,
	renderItem,
	className,
	autoplayDelay = 5000,
	slidesToShow = 1,
}: CarouselProps<T>) => {
	const [index, setIndex] = useState(0);
	const [visibleSlides, setVisibleSlides] = useState(slidesToShow);

	useEffect(() => {
		const updateVisibleSlides = () => {
			if (window.innerWidth < 768) {
				setVisibleSlides(1);
				return;
			}

			if (window.innerWidth < 992) {
				setVisibleSlides(Math.min(2, slidesToShow));
				return;
			}

			setVisibleSlides(slidesToShow);
		};

		updateVisibleSlides();
		window.addEventListener('resize', updateVisibleSlides);

		return () => window.removeEventListener('resize', updateVisibleSlides);
	}, [slidesToShow]);

	const maxIndex = useMemo(() => Math.max(items.length - visibleSlides, 0), [items.length, visibleSlides]);

	useEffect(() => {
		if (items.length <= visibleSlides) {
			return;
		}

		const timer = window.setInterval(() => {
			setIndex((current) => (current >= maxIndex ? 0 : current + 1));
		}, autoplayDelay);

		return () => window.clearInterval(timer);
	}, [autoplayDelay, items.length, maxIndex, visibleSlides]);

	const safeIndex = Math.min(index, maxIndex);
	const prev = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));
	const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));

	return (
		<div className={className}>
			<div className="carousel-viewport">
				<div
					className="carousel-track"
					style={{ transform: `translate3d(-${(safeIndex * 100) / visibleSlides}%, 0, 0)` }}>
					{items.map((item, itemIndex) => (
						<div
							className="carousel-item-wrap"
							key={itemIndex}
							style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
							{renderItem(item, itemIndex)}
						</div>
					))}
				</div>
			</div>
			<div className="slide-controls">
				<div className="dots-nav">
					{Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
						<button
							key={dotIndex}
							type="button"
							className={dotIndex === safeIndex ? 'owl-dot active' : 'owl-dot'}
							onClick={() => setIndex(dotIndex)}
							aria-label={`Slide ${dotIndex + 1}`}
						/>
					))}
				</div>
				<div className="slider-nav">
					<button type="button" className="owl-prev" onClick={prev} aria-label="Previous slide">
						<i className="arr_l-ic"></i>
					</button>
					<button type="button" className="owl-next" onClick={next} aria-label="Next slide">
						<i className="arr_r-ic"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
