import React from 'react';
import '../App.css';

function Contact() {
  return (
    <main>
      <section>
        <p className="text-brand">Practicing since 1991</p>
        <h1>Get in touch with us</h1>
      </section>
      <section className="section-mt-lg">
        <iframe
          title="Colyer Law Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.0000000000005!2d-93.511!3d44.974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sColyer%20Law%20Office!5e0!3m2!1sen!2sus!4v00000000000" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="form-flex">
        <div className="form-half">
          <h2>Contact Us</h2>
          <p>Make life’s passages easier, generation to generation. Contact us and see how we can help.</p>
        </div>
        <form className="form-max">
          <div style={{ marginBottom: 16, display: 'flex', gap: '4%' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName">First name *</label>
              <input type="text" id="firstName" name="firstName" required className="input-full" />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="lastName">Last name *</label>
              <input type="text" id="lastName" name="lastName" required className="input-full" />
            </div>
          </div>
          <div className="label-mb">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required className="input-full" />
          </div>
          <div className="label-mb">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required className="input-full textarea-min" />
          </div>
          <button type="submit" className="btn--brand">SUBMIT</button>
        </form>
      </section>

    </main>
  );
}

export default Contact;
