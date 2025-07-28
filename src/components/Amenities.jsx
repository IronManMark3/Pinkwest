// Amenities.jsx (modified)
import React, { useState } from "react";

export default function Amenities({ currentAmenities }) {
  const [center, setCenter] = useState(0);
  const total = currentAmenities.length;

  function getClass(idx) {
    if (idx === center) return "gallery-center";
    if (idx === (center - 1 + total) % total) return "gallery-left";
    if (idx === (center + 1) % total) return "gallery-right";
    if (idx === (center - 2 + total) % total) return "gallery-far-left";
    if (idx === (center + 2) % total) return "gallery-far-right";
    return "gallery-hidden";
  }

  const prev = () => setCenter((center - 1 + total) % total);
  const next = () => setCenter((center + 1) % total);

  const centerAmenity = currentAmenities[center];

  return (
    <section id="amenities" className="amenities-section" style={{ padding: "1rem 1rem 0 1rem" }}>
      <h2 className="section-maintitle" style={{ marginBottom: "1rem" }}>
        Amenities
      </h2>
      <div className="gallery-wrapper" style={{ position: "relative", marginBottom: "0.1rem",marginTop: "0.1rem" }}>
        <button
          className="btn btn-primary gallery-arrow"
          onClick={prev}
          aria-label="Previous amenity"
        >
          &lt;
        </button>
        <div className="gallery-coverflow">
          {currentAmenities.map((amenity, idx) => (
            <div key={idx} className={`gallery-item ${getClass(idx)}`}>
              <img
                src={amenity.image}
                alt={amenity.title}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary gallery-arrow"
          onClick={next}
          aria-label="Next amenity"
        >
          &gt;
        </button>
      </div>
      <h2 className="section-subtitle" style={{ margin: "0.5rem 0 1rem 0", color: "var(--primary)" }}>
        {centerAmenity.title}
      </h2>
    </section>
  );
}
