import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 60000); // Redirect after 6 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <img
        src="/images/ZXZ3-2.png"
        alt="PinkWest Logo"
        className="thankyou-logo"
      />
      <h1 className="thankyou-title">Your journey to INWEST begins.</h1>
      <br />
      <p className="thankyou-subtext">
        Thank you for showing interest in PinkWest.<br />
        Our team will reach out to you shortly with all the details.<br />
        Get ready to be part of West Jaipur’s commercial future.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "2rem" }}
      >
        Back to Home
      </button>
    </div>
  );
}
