import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 992);

	useEffect(() => {
		const handleResize = () => {
			const desktop = window.innerWidth >= 992;
			setIsDesktop(desktop);
			setIsMenuOpen(desktop);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.body.classList.remove('mnu-open');
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle('mnu-open', isMenuOpen && !isDesktop);
	}, [isDesktop, isMenuOpen]);

	const toggleMenu = () => {
		if (isDesktop) return;
		setIsMenuOpen((current) => {
			return !current;
		});
	};

	return (
		<header className={isScrolled ? 'main-head fixed' : 'main-head'}>
			<div className="head-top">
				<div className="container">
					<div className="head-info-box">
						<a
							className="head-info-cell"
							style={{ backgroundImage: 'url(/img/_style/phone.png)' }}
							href="tel:+1-800-555-0199">
							<span className="head-info-itm">+1 (800) 555-0199</span>
						</a>
						<a
							className="head-info-cell"
							style={{ backgroundImage: 'url(/img/_style/letter.png)' }}
							href="mailto:contact@astragrid.io">
							<span className="head-info-itm">contact@astragrid.io</span>
						</a>
						<a
							className="head-info-cell callback-btn"
							style={{ backgroundImage: 'url(/img/_style/callback.png)' }}
							href="#">
							<span className="head-info-itm">Request Call</span>
						</a>
					</div>
				</div>
			</div>

			<div className="head-bottom">
				<div className="container">
					<div className="head-line">
						<div className="head-cell">
							<div className="logo-wrap">
								<Link to="/" className="logo">
									<img src="/img/logo.png" alt="logo" />
								</Link>
							</div>
						</div>
						<div className="head-cell">
							{!isDesktop && (
								<div
									className={isMenuOpen ? 'toggle-btn on' : 'toggle-btn'}
									onClick={toggleMenu}>
									<span></span>
								</div>
							)}

							<div className={isMenuOpen ? 'mnu-wrap open' : 'mnu-wrap'}>
								<ul className="main-mnu">
									<li className="has-mnu">
										<Link to="/">
											<span>Services</span>
										</Link>
										<ul className="sub-menu">
											<li className="has-mnu">
												<Link
													to="/services/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
													<i className="arr_r-ic"></i>
												</Link>
												<ul className="sub-menu">
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
												</ul>
											</li>
											<li className="has-mnu">
												<Link
													to="/services/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
													<i className="arr_r-ic"></i>
												</Link>
												<ul className="sub-menu">
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
													<li>
														<Link
															to="/services/sub-item-2"
															className="title-sub">
															<span>sub-item-2</span>
														</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link
													to="/services/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className="">
										<Link to="/infrastructure">
											<span>Infrastructure</span>
										</Link>
									</li>
									<li className="">
										<Link to="/defense">
											<span>Email Defense</span>
										</Link>
									</li>
									<li className="has-mnu">
										<Link to="/">
											<span>Insights</span>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link
													to="/insights/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
											<li>
												<Link
													to="/insights/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
											<li>
												<Link
													to="/insights/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className="has-mnu">
										<Link to="/">
											<span>Company</span>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link
													to="/company/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
											<li>
												<Link
													to="/company/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
											<li>
												<Link
													to="/company/sub-item-1"
													className="title-sub">
													<span>sub-item-1</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className="">
										<Link to="/">
											<span>Careers</span>
										</Link>
									</li>
									<li className="">
										<Link to="/">
											<span>Contact</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
