import { useEffect, useState } from 'react';
import './Header.css';

type ContactItem = {
	id: string;
	label: string;
	href: string;
	type: 'phone' | 'email' | 'call';
};

type NavigationItem = {
	id: string;
	title: string;
	href: string;
	children?: NavigationItem[];
};

type HeaderData = {
	contactItems: ContactItem[];
	logo: string;
	navigation: NavigationItem[];
};

const fallbackHeader: HeaderData = {
	logo: 'AstraGrid',
	contactItems: [
		{
			id: 'phone',
			label: '+1 (800) 555-0199',
			href: 'tel:+1-800-555-0199',
			type: 'phone',
		},
		{
			id: 'email',
			label: 'contact@astragrid.io',
			href: 'mailto:contact@astragrid.io',
			type: 'email',
		},
		{
			id: 'request-call',
			label: 'Request Call',
			href: '#',
			type: 'call',
		},
	],
	navigation: [
		{
			id: 'services',
			title: 'Services',
			href: '#',
			children: [
				{
					id: 'infra',
					title: 'Infrastructure',
					href: '#',
					children: [
						{ id: 'infra-hosting', title: 'Cloud hosting', href: '#' },
						{ id: 'infra-backup', title: 'Backup & recovery', href: '#' },
						{ id: 'infra-automation', title: 'Automation', href: '#' },
					],
				},
				{
					id: 'security',
					title: 'IT Security',
					href: '#',
					children: [
						{ id: 'security-monitoring', title: 'Monitoring', href: '#' },
						{ id: 'security-response', title: 'Response', href: '#' },
						{ id: 'security-audit', title: 'Audit', href: '#' },
					],
				},
				{
					id: 'server-storage',
					title: 'Server & Storage',
					href: '#',
				},
			],
		},
		{
			id: 'insights',
			title: 'Insights',
			href: '#',
			children: [
				{ id: 'insights-news', title: 'Industry News', href: '#' },
				{ id: 'insights-reports', title: 'Reports', href: '#' },
				{ id: 'insights-learning', title: 'Learning', href: '#' },
			],
		},
		{
			id: 'company',
			title: 'Company',
			href: '#',
			children: [
				{ id: 'company-about', title: 'About us', href: '#' },
				{ id: 'company-team', title: 'Team', href: '#' },
				{ id: 'company-careers', title: 'Careers', href: '#' },
			],
		},
		{ id: 'careers', title: 'Careers', href: '#' },
		{ id: 'contact', title: 'Contact', href: '#' },
	],
};

function Header() {
	const [headerData, setHeaderData] = useState<HeaderData>(fallbackHeader);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		window
			.fetch('http://localhost:4000/header')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to load header data');
				}
				return response.json() as Promise<HeaderData>;
			})
			.then((data) => {
				setHeaderData(data);
			})
			.catch((err) => {
				console.error(err);
				setError('Header data unavailable, using local fallback.');
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const renderMenuItems = (items: NavigationItem[]) => {
		return items.map((item) => {
			const hasChildren = item.children?.length > 0;

			return (
				<li key={item.id} className={hasChildren ? 'has-mnu' : undefined}>
					<a href={item.href}>
						<span>{item.title}</span>
						{hasChildren ? <span className="menu-arrow">▾</span> : null}
					</a>

					{hasChildren ? (
						<ul className="sub-menu">{renderMenuItems(item.children || [])}</ul>
					) : null}
				</li>
			);
		});
	};

	return (
		<header className="main-head">
			<div className="head-top">
				<div className="container">
					<div className="head-info-box">
						{headerData.contactItems.map((item) => (
							<a
								key={item.id}
								className={`head-info-cell ${item.type === 'call' ? 'callback-btn' : ''}`}
								href={item.href}>
								<span className="head-info-itm">{item.label}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="head-bottom">
				<div className="container">
					<div className="head-line">
						<div className="head-cell">
							<a className="logo" href="/">
								{headerData.logo}
							</a>
						</div>
						<div className="head-cell">
							<div className="mnu-wrap">
								<nav aria-label="Main navigation">
									{renderMenuItems(headerData.navigation)}
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="header-status-row">
				{loading && <div className="header-status">Loading header…</div>}
				{!loading && error && <div className="header-status error">{error}</div>}
			</div>
		</header>
	);
}

export default Header;
