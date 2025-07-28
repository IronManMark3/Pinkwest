import React from "react";
import "../App.css";

export default function SecondaryFooter() {
  const stats = [
    { number: "28+", label: "Years of Legacy" },
    { number: "100+", label: "Completed Projects" },
    { number: "₹1000 Cr+", label: "Group Turnover" },
    { number: "40,000+", label: "Trusted Families Across Rajasthan" },
  ];

  return (
    <section className="secondary-footer">
      <div className="secondary-footer-content">
        <div className="footer-logo-left">
          <img src="images/manglam-logo.png" alt="Manglam Logo" />
        </div>
        <div className="footer-stats-right">
          {stats.map((item, idx) => (
            <div key={idx} className="footer-stat-item">
              <h3 className="footer-stat-number">{item.number}</h3>
              <p className="footer-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="pink-strip"/>
    </section>
  );
}
