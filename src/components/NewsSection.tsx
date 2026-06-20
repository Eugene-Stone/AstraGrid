import type { NewsItem } from '../types';

interface NewsSectionProps {
	news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
	const mainNews = news[0];
	const otherNews = news.slice(1);

	return (
		<section className="sect-news">
			<div className="title-wrap">
				<h2 className="h2-title">Insights</h2>
			</div>

			<div className="sect-news-line">
				{mainNews && (
					<div className="sect-news-cell">
						<div className="sect-news-img">
							<img src={mainNews.image} alt="image" />
						</div>
					</div>
				)}

				<div className="sect-news-cell">
					<div className="sect-news-lst">
						<ul>
							{otherNews.map((item) => (
								<li className="sect-news-itm" key={item.id}>
									<div className="news-top-line">
										<div className="date">{item.date}</div>
										<div className="type">{item.type}</div>
									</div>
									<a href={item.link} className="news-title">
										{item.title}
									</a>
									<div className="news-brief">{item.brief}</div>
									<div className="news-lnk">
										<a href={item.link}>Read full article</a>
									</div>
								</li>
							))}
						</ul>

						<div className="btn-wrap">
							<a href="#" className="btn">
								More
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
