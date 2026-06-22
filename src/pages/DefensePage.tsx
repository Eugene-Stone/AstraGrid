import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
	isScrolled: boolean;
}

const DefensePage = ({ isScrolled }: PageProps) => (
	<div className="wrapper">
		<Header isScrolled={isScrolled} />
		<div className="layout">
			<div className="page-wrap">
				<div className="top-img-wrap" style={{ backgroundImage: 'url(/img/inner_pages/1.jpg)' }}>
					<div className="container">
						<div className="top-title">
							Email Defense
							<br />
							«MailShield»
						</div>
						<div className="top-title-descr">
							MailShield applies advanced filtering to keep your email flow secure, clean,
							and reliably delivered.
						</div>
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
								<a href="/" data-spa-link>Cloud Services</a>
							</li>
							<li>
								<span>Email Defense «MailShield»</span>
							</li>
						</ul>
					</div>

					<div className="container">
						<div className="top-txt">
							<strong>Recommended for:</strong>
							<ul>
								<li>Companies with 1-150 employees</li>
								<li>Branch offices</li>
								<li>All industries</li>
							</ul>

							<strong>MailShield at a glance:</strong>
							<ul>
								<li>Detect and remove known and emerging threats before they reach your clients.</li>
								<li>Scan email traffic before it reaches client servers and devices.</li>
								<li>Analyze archive files without password restrictions.</li>
								<li>Protect against mail bombing, relay abuse, and file-type manipulation.</li>
								<li>Optional malware protection</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="btn-wrap more-btn-wrap">
					<a href="#mailshield-core" className="btn">
						More Information
					</a>
				</div>

				<section className="sect-txt" id="mailshield-core">
					<div className="container">
						<div className="title-wrap">
							<div className="h2-title">The core of MailShield</div>
						</div>

						<div className="txt-box">
							<div className="row">
								<div className="col-md-6">
									<h3>Filter (sender base)</h3>
									<p>
										It automatically blocks suspicious emails and scores senders using a global
										reputation database.
									</p>
								</div>
								<div className="col-md-6">
									<h3>Virus scanner</h3>
									<p>
										MailShield uses leading engines and heuristics to keep protection adaptive
										and efficient as every email is analyzed.
									</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<h3>Spam filter</h3>
									<p>
										A combination of signatures, content analysis, and adaptive scoring enables
										fast identification of spam messages.
									</p>
								</div>
								<div className="col-md-6">
									<h3>Virus outbreak filter</h3>
									<p>
										It detects outbreaks faster than traditional methods, providing an early
										defense while conventional signatures catch up.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		<Footer />
	</div>
);

export default DefensePage;
