const ContactSection = () => {
	return (
		<section className="sect-contact" style={{ backgroundImage: 'url(/img/home/cont-bg.jpg)' }}>
			<div className="container">
				<div className="title-wrap">
					<h2 className="h2-title">Contact</h2>
					<div className="title-descr">
						Have a project question? Send us a note and we’ll connect with you shortly.
					</div>
				</div>

				<div className="cont-form-wrap">
					<form action="#" className="cont-form">
						<div className="cust-inp">
							<input type="text" placeholder="Your Name (required)" required />
						</div>
						<div className="cust-inp">
							<input type="text" placeholder="Your Email (required)" required />
						</div>
						<div className="cust-inp">
							<input type="text" placeholder="Subject" required />
						</div>
						<div className="cust-textarea">
							<textarea placeholder="Your Message" required></textarea>
						</div>

						<div className="btn-wrap">
							<button className="btn" type="submit">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
