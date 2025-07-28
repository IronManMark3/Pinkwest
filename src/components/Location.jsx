import React from "react";

export default function Location() {
  const locations = [
    { place: "Mansarovar Metro Station", time: "8 minutes" },
    { place: "Vaishali Nagar Extension", time: "12 minutes" },
    { place: "Mansarovar Extension", time: "5 minutes" },
    { place: "Shalby Hospital", time: "12 minutes" },
    { place: "Manipal University", time: "22 minutes" },
    { place: "Mahindra SEZ", time: "17 minutes" },
    { place: "JK Lakshmipat University", time: "12 minutes" },
  ];

  return (
    <section id="location" className="location-section">
      <h2 className="location-title">Unbeatable Location</h2>
      <div className="location-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.901797167539!2d75.70797631113439!3d26.87486096161869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b0fe7816f5b%3A0x83c8451d27ab3be1!2sManglam%20Pinkwest!5e0!3m2!1sen!2sin!4v1751625799686!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{
              border: 0,
              maxWidth: "100vw",
              display: "block",
              overflow: "hidden",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
        </div>

        <div className="location-info">
          <ul className="location-list">
            {locations.map((item, idx) => (
              <li
                key={idx}
                className="location-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  fontSize: "1rem",
                  color: "#374151",
                  gap: "12px",
                }}
              >
                <span style={{ flex: 1, textAlign: "left" }}>{item.place}</span>

                <svg
                  className="line-slide"
                  height="2"
                  width="90"
                  viewBox="0 0 90 2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="90"
                    y2="1"
                    stroke="#EC2C5A"
                    strokeWidth="2"
                  />
                </svg>

                <span
                  style={{
                    flex: 0,
                    minWidth: "100px",
                    textAlign: "right",
                    fontWeight: 500,
                  }}
                >
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
