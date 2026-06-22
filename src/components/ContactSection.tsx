import { useState, type FormEvent } from 'react';
import { assetUrl } from '../utils/assets';

const ContactSection = () => {
	const [status, setStatus] = useState<'idle' | 'sent'>('idle');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.currentTarget.reset();
		setStatus('sent');
	};

	return (
		<section
			className="sect-contact"
			style={{ backgroundImage: `url(${assetUrl('/img/home/cont-bg.jpg')})` }}>
			<div className="container">
				<div className="title-wrap">
					<h2 className="h2-title">Contact</h2>
					<div className="title-descr">
						Have a project question? Send us a note and we’ll connect with you shortly.
					</div>
				</div>

				<div className="cont-form-wrap">
					<form action="#" className="cont-form" onSubmit={handleSubmit}>
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
						{status === 'sent' && (
							<div className="form-status">Thank you. Your message has been prepared for review.</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
