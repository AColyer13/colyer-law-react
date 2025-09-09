import React from 'react';
import '../App.css';

function About() {
  return (
    <main>
      <section>
        <p className="text-brand">Practicing since 1991</p>
        <h1>Know more about Colyer Law Office</h1>
      </section>
      <section id="about" className="card section-mt-lg section-p">
        <h3>About</h3>
        <p>Jeff Colyer is a member of the Minnesota State Bar Association and Hennepin County Bar Association. He has practiced law and worked in the trust and estate planning field for the past thirty years. He has been with the trust departments of Marquette Bank Minneapolis and Wells Fargo Bank Wayzata and with the United States Treasury Department. Colyer Law Office is located in Wayzata MN.</p>
      </section>
      <section id="mission" className="card section-mt-lg section-p">
        <h3>Our Mission</h3>
        <p>Make life’s passages easier, generation to generation.<a href="/contact">Contact us</a>and see how we can help.</p>
        <p>Real estate, small business law, wills and estate planning attorney serving Minneapolis, Wayzata and the surrounding Twin Cities area.</p>
      </section>
      <section id="memberships" className="section-mt-lg text-center">
        <h3>Associations & Memberships</h3>
        <p>Jeff Colyer is a member of the Minnesota State Bar Association and Hennepin County Bar Association</p>
      </section>
      <section id="testimonials" className="section-mt-lg">
        <h2 className="text-center">What Our Clients Say</h2>
        <div className="cards-row">
          <div className="testimonial-card testimonial-card-inner-shadow card-padded">
            <div className="testimonial-icon">👍</div>
            <strong>Teri</strong>
            <p className="mt-8">Jeff Colyer is a well versed lawyer and answers questions in a way we can understand. We appreciate him taking the time to listen and his efficient preparedness. He has done a great job of taking care of our personal wills, etc. We would definitely recommend him!</p>
          </div>
          <div className="testimonial-card testimonial-card-inner-shadow card-padded">
            <div className="testimonial-icon">👍</div>
            <strong>Jake</strong>
            <p className="mt-8">I've worked with Jeff for 5 years, he is top notch in every aspect of his profession. He responds promptly to any questions and keeps you well informed. He is a great asset to the Wayzata community!</p>
          </div>
          <div className="testimonial-card testimonial-card-inner-shadow card-padded">
            <div className="testimonial-icon">👍</div>
            <strong>Steven</strong>
            <p className="mt-8">Jeff tends to every detail of the estate planning process while listening to the clients specific needs. Also, he provides meticulous follow up to help change necessary titles and beneficiaries to complete the plans.</p>
          </div>
        </div>
      </section>
      <section id="help" className="section-mt-lg text-center">
        <div className="card card-inline card-padded-lg">
          <h2>We Help Solve Your Legal Issues</h2>
          <p>Make life’s passages easier, generation to generation</p>
          <button className="btn-contact-us">Contact Us</button>
        </div>
      </section>
    </main>
  );
}

export default About;
