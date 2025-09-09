import React from 'react';
import '../App.css';

function Services() {
  return (
    <main>
      <section>
        <p className="text-brand">Practicing since 1991</p>
        <h1>Why be Concerned with Estate Planning?</h1>
      </section>
      <section className="section-mt-lg text-center">
        <h2>We help people in solving legal issues</h2>
        <p style={{ maxWidth: 600, margin: '16px auto' }}>
          A good estate plan provides a sense of security and comfort that one's desires about many future contingencies will be met. Estate planning not only defines a person's wishes to be carried out after such person passes away regarding his or her estate (all the property owned), but also sets out the means for personal well being far into the future. To reach this goal, estate planning encompasses several connected legal areas and techniques.
        </p>
      </section>
      <section className="cards-row section-mt-lg">
        <div className="card card-padded">
          <h3 className="text-center">Wills</h3>
          <p>A will is a legal document specifying how a person's property and assets should be handled after death. A testator (the person making the will) can give instructions on how the property should be divided, who should receive what portions or specific items, and who will take care of any surviving minor children. A will can establish a trust or make gifts to charity. Without a will the government determines how property will be distributed, and may impose a substantial tax burden on the estate. Wills must meet a state's legal requirements to be effective, so professional guidance from a qualified will and estate attorney is important.</p>
          <p><a href="#">Wills: Why You Should Have One and the Lawyer's Role in Its Preparation</a></p>
        </div>
        <div className="card card-padded">
          <h3 className="text-center">Trusts</h3>
          <p>Trusts enable the trustor to determine who receives the money, when they receive it, and what conditions must be met. Many people wish to spare their relatives from going through probate, and living trust assets are not subject to probate. Because there is no probate, survivors do not have to reveal the extent of the living trust's assets through a public filing as happens with probate. If the trustor holds real estate in more than one state, a living trust covering the property may also allow survivors to avoid probate in those states. Aside from the advantages for the survivors, a living trust can help a trustor manage his or her financial affairs because a trustee takes title to the trust's assets. Some people are particularly concerned about how their finances will be managed if they should fall ill. A living trust may provide peace of mind because a successor trustee can continue to manage the trust's assets in the event the trustor becomes mentally or physically incapacitated.</p>
        </div>
        <div className="card card-padded">
          <h3 className="text-center">Power of Attorney</h3>
          <p>A power of attorney allows a person to appoint another (called the attorney-in-fact) to act as his or her agent in specified situations. For example, a person may delegate all financial powers and responsibilities to a designated individual, using a power of attorney, so that if the person becomes incapacitated, the attorney-in-fact can quickly begin making decisions.</p>
        </div>
        <div className="card card-padded">
          <h3 className="text-center">Health Care Directives</h3>
          <p>A health care directive (i.e. living will) is a document providing advance directives on an individual's health care preferences, especially in case of terminal illness or permanent unconsciousness. Many people hold strong opinions about heroic measures and life-support machines, and living wills offer an opportunity to formalize their wishes. Laws on living wills vary widely from state to state, so it is important to comply with local laws to ensure preferences will be honored.</p>
        </div>
        <div className="card card-padded">
          <h3 className="text-center">Estate Taxes</h3>
          <p>Many state and federal tax regulations impact estate planning. However, a carefully crafted estate plan can reduce the tax burden on an estate and estate beneficiaries. Both state and federal estate tax rules and regulations are extremely complex. The advice of an estate planning attorney to maximize estate tax savings is highly recommended.</p>
          <p>As of 2022, estates worth more than $3,000,000 must file a Minnesota Estate Tax Return, Form M706, and estates worth more than $11,700,000 must file a Federal Estate Tax Return, Form 706. Federal Gift Tax Law regulates gifts to individuals during life. The gift tax rules prevent people from giving away their assets to avoid estate taxes at death. Gifts exceeding $17,000 per recipient per calendar year require the giver of the gift to file a Federal Gift Tax Return.</p>
          <p>Current Minnesota law allows only $3,000,000 to pass estate tax-free. Current federal law allows $12,920,000 to pass estate tax-free. The surviving spouse may inherit an unlimited amount of assets without paying estate taxes. However, if the taxable estate exceeds the above referenced dollar amounts and the entire estate is left to someone other than a spouse, the surviving spouse may lose the option of subsequently leaving an equivalent amount of assets to his or her chosen beneficiaries without incurring estate taxes. Estate planning attorneys can assist clients to create trusts that allow married couples to take full advantage of these shifting exemptions. <a href="#">Contact us</a> to find out how a qualified estate planning attorney can help.</p>
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

export default Services;
