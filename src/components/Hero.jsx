import React from "react";
import "../App.css";

export default function Hero({
  heroRef,
  showForm,
  setShowForm,
  setFormCollapsed,
  delay, 
  anime
}) {
  return (
    <section
      className="hero-section"
      id="home"
      ref={heroRef}
    >
      {/* Background image fallback */}
      <video
  className="hero-video-bg absolute inset-0 w-full h-full object-cover z-10 desktop-video"
  autoPlay
  loop
  muted
  playsInline
  poster="images/main-image.jpeg"
  preload="auto"
>
  <source src="/videos/pinkwest-finale.webm" type="video/webm" />
  <source src="/videos/Pinkwest finale.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<video
  className="hero-video-bg absolute inset-0 w-full h-full object-cover z-10 mobile-video"
  autoPlay
  loop
  muted
  playsInline
  poster="images/main-image.jpeg"
  preload="auto"
>
  <source src="/videos/Pinkwest_Mobile.mp4" type="video/mp4" />
  <source src="/videos/Pinkest_Mobile.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>



      <div className="hero-overlay z-20">
        <div className="hero-content">
          <h1 className="hero-title">Manglam Pink West</h1>
          <p className="hero-subtitle">
            Inwest in West Jaipur's Commercial Future 
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (showForm) {
                  setShowForm(false);
                } else {
                  setShowForm(true);
                  setFormCollapsed(false);
                }
              }}
            >
              Book Free Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
