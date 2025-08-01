import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer-section footer">
      <div className="footer-content">
        {/* Left: Logo */}
        <div className="footer-logo">
          <div className="footer-images">
            <a href="" className="footer-logo-link">
              <img
                src="images/Asset 1.png"
                alt="Pinkwest Logo"
                className="footer-image-1 "
              />
            </a>
          </div>

          <h3 className="footer-copyright">
            © 2025 Pinkwest. All rights reserved.
          </h3>
        </div>
        {/* Right: Social Media */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=61577384202414"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/officialmanglampinkwest?igsh=MTBoNDF6OHUwNXRtbg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a href="tel:+91 91166 15798" target="_blank" aria-label="Phone">
            <FaPhoneAlt size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
