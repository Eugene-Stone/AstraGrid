import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="main-foot">
			<div className="container">
				<div className="foot-line">
					<div className="foot-cell">
						<div className="copy">
							Copyright © 2024 AstraGrid. Crafted by AstraGrid.
						</div>
					</div>
					<div className="foot-cell">
						<ul className="foot-mnu">
							<li>
								<a href="#">Legal</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
						</ul>
						<div className="foot-soc">
							<a
								href="#"
								className="soc-btn"
								style={{ backgroundImage: 'url(/img/_style/fb-icon.png)' }}></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
