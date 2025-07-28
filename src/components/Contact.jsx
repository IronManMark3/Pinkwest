import { useState } from "react";

export default function Contact({ setShowForm, setFormCollapsed, setSubmissionType }) {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Schedule Your Visit Today</h2>
      <p className="contact-subtitle">
        Connect with us to know more about unit availability, pricing, and offers.
      </p>
      <div className="contact-buttons">
        <button
          className="btn btn-primary"
          onClick={() => {
            setSubmissionType("brochure");
            setShowForm(true);
            setFormCollapsed(false);
          }}
        >
          Download Brochure
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setSubmissionType("form");
            setShowForm(true);
            setFormCollapsed(false);
          }}
        >
          Book a Site Visit
        </button>
      </div>
    </section>
  );
}
