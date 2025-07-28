import React from "react";
import "../App.css";

export default function About() {
  return (
    <section
      className="about-section"
      style={{
        backgroundColor: "#fff",
        padding: "4rem 1rem",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        className="about-container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "nowrap",
          
        }}
      >
        {/* Image Left (desktop), Top (mobile) */}
        <div
          className="about-image"
          style={{
            flex: "0 0 70%",
            padding: "0px",
            boxSizing: "border-box",
          }}
        >
          <img
            src="/images/main-image.jpeg"
            alt="Pinkwest Logo"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: "1.5rem",
              display: "block",
            }}
          />
        </div>

        {/* Text Right (desktop), Bottom (mobile) */}
        <div
          className="about-text"
          style={{
            flex: "0 0 45%",
            padding: "18px",
            color: "#374151",
            fontFamily: "Brother-Regular",
            textAlign: "left",
            textAlignLast: "left",
          }}
        >
          <h2
            style={{
              color: "#EC2C5A",
              fontFamily: "Brother-Bold",
              fontSize: "2.5rem",
              marginBottom: "0rem",
            }}
          >
            Pinkwest
          </h2>
          <h3
            style={{
              color: "#EC2C5A",
              fontFamily: "Brother-Bold",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            West Jaipur's Commercial Landmark
          </h3>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.7",
            }}
          >
            Manglam Pinkwest is Jaipur’s first high-street commercial mall on Ajmer Road, crafted to redefine retail and business in West Jaipur. Spanning over 13,00,000 sq. ft., the project offers a mix of premium retail, modern offices, and fully-furnished studio apartments, backed by a 6% assured rental return. Located in one of Jaipur’s fastest-growing corridors and supported by leasing assistance, RERA approvals, and RIPS incentives, Pinkwest presents a future-ready investment ecosystem. Developed by the trusted Manglam Group, the project combines convenience, compliance, and consistent income for investors looking to capitalize on Jaipur’s commercial rise.
          </p>
        </div>
      </div>

      {/* Responsive Flex Switch */}
      <style>
        {`
          @media (max-width: 768px) {
            .about-container {
              flex-direction: column !important;
              align-items: center !important;
              padding: 0 1rem !important;
            }

            .about-image, .about-text {
              flex: unset !important;
              width: 100% !important;
              padding: 0px !important;
              text-align: justify !important;
              text-align-last: center !important;
            }

            .about-text h2 {
              font-size: 2rem !important;
              margin-bottom: 1rem !important;
            }

            .about-text p {
              font-size: 1rem !important;
              line-height: 1.6 !important;
              
            }
              .about-text h3 {
              font-size: 1.25rem !important;
              text-align: center !important;
          }
        `}
      </style>
    </section>
  );
}
