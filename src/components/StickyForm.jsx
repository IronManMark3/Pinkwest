import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { submitFormToGoogleSheet } from "../utils/backend"; // Assuming correct path

export default function StickyForm({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
  showTooltips,
  setShowTooltips,
  handleInputChange,
  handleInputBlur,
  handleInputFocus,
  isMobile,
  showForm,
  stickyFormRef,
  fabRef,
  formCollapsed,
  setFormCollapsed,
  formFieldsRef,
  submissionType,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${field[0].toUpperCase() + field.slice(1)} is required`;
      }
    });

    setFormErrors(newErrors);
    setShowTooltips(
      Object.fromEntries(Object.entries(newErrors).map(([k, v]) => [k, !!v]))
    );

    if (Object.values(newErrors).some(Boolean)) return;

    // Submit via backend.jsx
    const response = await submitFormToGoogleSheet(formData, submissionType);

    if (!response.success) {
      alert("Something went wrong:\n" + response.error);
      return;
    }

    if (submissionType !== "brochure") {
      window.location.href = "/thank-you";
    }

    setFormData({ name: "", phone: "", email: "", lookingFor: "" });
    setFormErrors({});
    setShowTooltips({});
  };

  return (
    <div
      className="contact-form-fixed"
      ref={stickyFormRef}
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 100,
        background: "var(--primary)",
        color: "#fff",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.10)",
        maxHeight: "90vh",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {isMobile && (
        <button
          className="contact-form-fab btn btn-primary"
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            top: 10,
            marginBottom: 10,
            zIndex: 200,
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "underline",
          }}
          onClick={() => setFormCollapsed((v) => !v)}
          aria-label={formCollapsed ? "Expand Form" : "Collapse Form"}
        >
          {formCollapsed ? <FaChevronUp size={22} /> : <FaChevronDown size={22} />}
          {formCollapsed ? "Book a Visit" : "Hide Form"}
        </button>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        {(isMobile ? (
          <div ref={formFieldsRef} style={{ overflow: "hidden", transition: "height 0.4s" }}>
            {renderFields()}
          </div>
        ) : (
          <>{renderFields()}</>
        ))}
      </form>
    </div>
  );

  function renderFields() {
    return (
      <>
        <div className="form-field">
          <select
            className="form-input"
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("lookingFor")}
            onFocus={() => handleInputFocus("lookingFor")}
          >
            <option value="" disabled>
              I'm looking for
            </option>
            <option value="Studio Apartment">Studio Apartment</option>
            <option value="Retail Spaces">Retail Spaces</option>
            <option value="Office Spaces">Office Spaces</option>
          </select>
          {showTooltips.lookingFor && formErrors.lookingFor && (
            <div className="form-tooltip">{formErrors.lookingFor}</div>
          )}
        </div>
        <div className="form-field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("name")}
            onFocus={() => handleInputFocus("name")}
            autoComplete="off"
          />
          {showTooltips.name && formErrors.name && (
            <div className="form-tooltip">{formErrors.name}</div>
          )}
        </div>
        <div className="form-field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("phone")}
            onFocus={() => handleInputFocus("phone")}
            autoComplete="off"
          />
          {showTooltips.phone && formErrors.phone && (
            <div className="form-tooltip">{formErrors.phone}</div>
          )}
        </div>
        <div className="form-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => handleInputBlur("email")}
            onFocus={() => handleInputFocus("email")}
            autoComplete="off"
          />
          {showTooltips.email && formErrors.email && (
            <div className="form-tooltip">{formErrors.email}</div>
          )}
        </div>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </>
    );
  }
}
