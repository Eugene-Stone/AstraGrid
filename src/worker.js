const data = {
	slides: [
		{
			id: 1,
			title: "Secure the Future",
			description:
				"AstraGrid builds resilient digital experiences with precision and care. We deliver transparent support and dependable systems.",
			image: "/img/home/slide/1.jpg",
		},
		{
			id: 2,
			title: "Streamline Every Layer",
			description:
				"AstraGrid builds resilient digital experiences with precision and care. We deliver transparent support and dependable systems.",
			image: "/img/home/slide/2.jpg",
		},
		{
			id: 3,
			title: "Design for Confidence",
			description:
				"AstraGrid builds resilient digital experiences with precision and care. We deliver transparent support and dependable systems.",
			image: "/img/home/slide/1.jpg",
		},
	],
	services: [
		{
			id: 1,
			icon: "/img/_style/structur.png",
			title: "Infrastructure",
			description:
				"Our infrastructure team builds the backbone for digital operations. Every deployment is planned to keep systems stable, fast, and always reachable.",
			href: "/infrastructure",
		},
		{
			id: 2,
			icon: "/img/_style/security.png",
			title: "IT Security",
			description:
				"IT security is a top priority, but many teams still treat it as a secondary concern. We help make protection practical and reliable.",
			href: "/defense",
		},
		{
			id: 3,
			icon: "/img/_style/server.png",
			title: "Server & Storage",
			description:
				"In storage and server operations, AstraGrid delivers scalable solutions that protect your data with high availability and operational simplicity.",
			href: "/infrastructure",
		},
	],
	news: [
		{
			id: 1,
			date: "31.08.2017",
			type: "Events",
			title: "AstraGrid Welcomes New Team Members",
			brief: "Our team has grown with new specialists across engineering and operations. This expansion helps us support client projects with more speed and depth.",
			link: "#",
			image: "/img/home/1.jpg",
		},
		{
			id: 2,
			date: "31.08.2017",
			type: "Events",
			title: "AstraGrid Opens New Regional Hub",
			brief: "After steady growth over the years, we now serve new markets with a regional hub designed to improve local support and faster deployment cycles.",
			link: "#",
			image: "/img/home/1.jpg",
		},
	],
	awards: [
		{
			id: 1,
			image: "/img/home/award-1.png",
		},
		{
			id: 2,
			image: "/img/home/award-2.png",
		},
		{
			id: 3,
			image: "/img/home/award-3.png",
		},
		{
			id: 4,
			image: "/img/home/award-2.png",
		},
		{
			id: 5,
			image: "/img/home/award-3.png",
		},
	],
};

const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	if (request.method === "OPTIONS") {
		return new Response(null, {
			status: 204,
			headers: CORS_HEADERS,
		});
	}

	const url = new URL(request.url);
	const path = url.pathname.replace(/^\/+/, "");

	if (request.method === "GET") {
		if (path === "slides") {
			return jsonResponse(data.slides);
		}
		if (path === "services") {
			return jsonResponse(data.services);
		}
		if (path === "news") {
			return jsonResponse(data.news);
		}
		if (path === "awards") {
			return jsonResponse(data.awards);
		}
	}

	return new Response(JSON.stringify({ message: "Not found" }), {
		status: 404,
		headers: CORS_HEADERS,
	});
}

function jsonResponse(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
			...CORS_HEADERS,
		},
	});
}
