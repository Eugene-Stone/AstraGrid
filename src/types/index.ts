export interface Slide {
	id: number;
	title: string;
	description: string;
	image: string;
}

export interface ServiceItem {
	id: number;
	icon: string;
	title: string;
	description: string;
	href?: string;
}

export interface NewsItem {
	id: number;
	date: string;
	type: string;
	title: string;
	brief: string;
	link: string;
	image: string;
}

export interface AwardItem {
	id: number;
	image: string;
}

export interface ContactInfo {
	phone: string;
	email: string;
	callbackLabel: string;
}
