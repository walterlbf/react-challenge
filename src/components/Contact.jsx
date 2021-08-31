import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
	return (
		<section>
			<article className=".form-section">
				<h2 className="h2-contact">
				  Are you a parent without a nanny and looking to share?
				</h2>
				<p className="p-contact">
				  Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
				</p>
				<form className="forms">
          {/* <input placeholder="Your name" required />
          <input type="email" placeholder="Your email" required /> */}
          <button className="send-button">
            Send
          </button>
        </form>
			</article>
		</section>
	)
}
