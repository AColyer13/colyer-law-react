import React from 'react';
import '../App.css';
import { Carousel, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <main>
      <section>
        <p className="text-brand">Practicing since 1991</p>
        <h1>Wills, Estate Planning, Real Estate and Business Law</h1>
        <button className="btn-block-center">Contact</button>
      </section>

      <Row>
      <Col className="mx-auto shadow rounded-4 overflow-hidden bg-black p-0" style={{ maxWidth: 600 }}>
        <Carousel indicators={false} style={{ height: 340 }}>
          <Carousel.Item>
            <img
              className="img-fluid w-100"
              style={{ height: 340, objectFit: 'cover' }}
              src="https://hannalawfirms.com/wp-content/uploads/2020/07/law-firm.jpg?w=1200&h=600&fit=crop"
              alt="Law office"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid w-100"
              style={{ height: 340, objectFit: 'cover' }}
              src="https://wallpaperaccess.com/full/4328858.jpg?w=1200&h=600&fit=crop"
              alt="Lawyer working"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid w-100"
              style={{ height: 340, objectFit: 'cover' }}
              src="https://images.fastcompany.com/image/upload/f_auto,q_auto,c_fit/wp-cms/uploads/2023/10/p-1-90970286-courtroom-design.jpg?w=1200&h=600&fit=crop"
              alt="Courtroom justice"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>

      <section id="about" className="card section-mt section-p">
        <h2>About</h2>
        <p>Jeff Colyer is a member of the Minnesota State Bar Association and Hennepin County Bar Association. He has practiced law and worked in the trust and estate planning field for the past thirty years. He has been with the trust departments of Marquette Bank Minneapolis and Wells Fargo Bank Wayzata and with the United States Treasury Department. Colyer Law Office is located in Wayzata MN.</p>
        <h3>Practicing Since 1991</h3>
        <p>Make life’s passages easier, generation to generation. <a href="#contact">Contact us</a> and see how we can help.</p>
        <p>Real estate, small business law, wills and estate planning attorney serving Minneapolis, Wayzata and the surrounding Twin Cities area.</p>
      </section>
      <section id="services" className="card section-mt section-p">
        <h2>Services</h2>
        <h4>Estate Planning Services & Business Law</h4>
        <ul>
          <li><strong>Wills</strong>: A will is a legal document that outlines what happens to your assets after you die. It's important because it ensures your wishes are carried out.</li>
          <li><strong>Trusts</strong>: A trust is a legal arrangement where a trustee holds assets for a beneficiary. Trusts can help avoid probate and provide for beneficiaries who can't manage assets.</li>
          <li><strong>Estate Planning</strong>: Estate planning is the process of arranging for the transfer of your assets. It ensures that your assets are distributed according to your wishes and can help minimize taxes and avoid probate.</li>
          <li><strong>Probate</strong>: Probate is the legal process of administering an estate. It ensures that debts are paid and assets are distributed according to the person's will or state law.</li>
          <li><strong>Asset Protection</strong>: Asset protection is the process of safeguarding your assets from creditors or lawsuits. It can help protect your financial future and ensure that your assets are available for you and your family.</li>
          <li><strong>Real Estate</strong>: When considering estate planning, individuals must address how their real estate holdings will be managed and distributed upon their death.</li>
          <li><strong>Elder Law</strong>: Elder law is the area of law that focuses on issues affecting seniors, such as estate planning, long-term care, and retirement. It helps seniors protect their assets and plan for their future.</li>
          <li><strong>Business Law</strong>: Business law is the area of law that governs business transactions and activities. It helps businesses understand their legal obligations, protect their interests, and avoid costly legal disputes.</li>
        </ul>
        <button className="btn-learn-more">Learn More</button>
      </section>

      <section id="location" className="section-mt text-center">
        <div className="card card-center">
        <h2>Office Location</h2>
        <p>Colyer Law Office, P.A.</p>
        <h4>Wayzata</h4>
        <address>
          681 East Lake Street, Suite 264B<br /> Wayzata, MN 55391<br />
          +1 952-476-8164
        </address>
        <a href="https://maps.google.com/?q=681+East+Lake+Street,+Suite+264B+Wayzata,+MN+55391" target="_blank" rel="noopener noreferrer">Get Directions</a>
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

export default Home;
