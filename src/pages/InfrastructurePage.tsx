import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
	isScrolled: boolean;
}

const InfrastructurePage = ({ isScrolled }: PageProps) => (
	<div className="wrapper">
		<Header isScrolled={isScrolled} />
		<div className="layout">
			<div className="page-wrap">
				<div className="top-img-wrap" style={{ backgroundImage: 'url(/img/inner_pages/1.jpg)' }}>
					<div className="container">
						<div className="top-title">IT Infrastructure</div>
					</div>
				</div>

				<div className="top-txt-wrap">
					<div className="breadcrumbs-wrap">
						<ul>
							<li>
								<a href="/" data-spa-link>Home</a>
							</li>
							<li>
								<a href="/" data-spa-link>Services</a>
							</li>
							<li>
								<span>IT Infrastructure</span>
							</li>
						</ul>
					</div>

					<div className="container">
						<div className="top-txt">
							<p>
								The network infrastructure is the backbone of modern operations. Reliable
								connectivity and uptime rely on careful architecture, planning, and managed
								service execution.
							</p>
						</div>
					</div>
				</div>

				<section className="sect-txt">
					<div className="container">
						<div className="title-wrap">
							<div className="h2-title">Our expertise in this area includes:</div>
						</div>

						<div className="txt-box">
							<div className="row">
								<div className="col-md-6">
									<ul>
										<li>Network analysis & troubleshooting</li>
										<li>Network audits</li>
										<li>Network inventory and documentation</li>
										<li>Wireless LAN</li>
										<li>Integration of diverse network systems</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul>
										<li>Extension of existing networks</li>
										<li>Network management systems</li>
										<li>24/7 support</li>
										<li>Monitoring</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="btn-wrap more-btn-wrap">
							<a href="/defense" className="btn" data-spa-link>
								Explore Email Defense
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
		<Footer />
	</div>
);

export default InfrastructurePage;
