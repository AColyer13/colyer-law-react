import React, { useState } from 'react';
import '../App.css';
import Modal from '../components/Modal';

function OnlineForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <main>
      <p className="text-brand">Practicing since 1991</p>
      <h1>Online Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required className="input-full" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required className="input-full" />
        </label>
        <br />
        <button type="submit" className="btn--brand">
          Submit
        </button>
      </form>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} message="Form submitted!" />
      )}
    </main>
  );
}

export default OnlineForm;
