import type { AwardItem, NewsItem, ServiceItem, Slide } from './types';

// const API_URL = 'http://localhost:4000';
const API_URL = 'https://astragrid.eugenestone-work.workers.dev';

async function fetchJson<T>(path: string): Promise<T> {
	const response = await fetch(`${API_URL}${path}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch ${path}: ${response.status}`);
	}

	return response.json() as Promise<T>;
}

export function getSlides() {
	return fetchJson<Slide[]>('/slides');
}

export function getServices() {
	return fetchJson<ServiceItem[]>('/services');
}

export function getNews() {
	return fetchJson<NewsItem[]>('/news');
}

export function getAwards() {
	return fetchJson<AwardItem[]>('/awards');
}
