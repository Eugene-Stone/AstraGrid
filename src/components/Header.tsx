import React, { useState } from 'react';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="main-head">
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
								<a href="/" className="logo">
									<img src="/img/logo.png" alt="logo" />
								</a>
							</div>
						</div>
						<div className="head-cell">
							<div
								className={isMenuOpen ? 'toggle-btn on' : 'toggle-btn'}
								onClick={toggleMenu}>
								<span></span>
							</div>

							<div
								className="mnu-wrap"
								style={{ display: isMenuOpen ? 'block' : 'none' }}>
								<ul className="main-mnu">
									<li className="has-mnu">
										<a href="#">
											<span>Services</span>
										</a>
										<ul className="sub-menu">
											<li className="has-mnu">
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
													<i className="arr_r-ic"></i>
												</a>
												<ul className="sub-menu">
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
												</ul>
											</li>
											<li className="has-mnu">
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
													<i className="arr_r-ic"></i>
												</a>
												<ul className="sub-menu">
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
													<li>
														<a href="#" className="title-sub">
															<span>sub-item-2</span>
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
										</ul>
									</li>
									<li className="has-mnu">
										<a href="#">
											<span>Insights</span>
										</a>
										<ul className="sub-menu">
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
										</ul>
									</li>
									<li className="has-mnu">
										<a href="#">
											<span>Company</span>
										</a>
										<ul className="sub-menu">
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
											<li>
												<a href="#" className="title-sub">
													<span>sub-item-1</span>
												</a>
											</li>
										</ul>
									</li>
									<li className="">
										<a href="#">
											<span>Careers</span>
										</a>
									</li>
									<li className="">
										<a href="#">
											<span>Contact</span>
										</a>
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
