import emailjs from "@emailjs/browser";

export const submitFormToGoogleSheet = async (formData, type = "form") => {
  const endpoint =
    "https://script.google.com/macros/s/AKfycbz-uLstTfCfWzZ57LEuEIjd1lIkvonHOmJYDwcyCk3avOgJTh1BsuNp1A0H2wxdSaiu/exec"; // Your deployed Apps Script URL

  const payload = {
    ...formData,
    tab: type,
    secret: "mySuperSecret123", // Must match the secret in your Apps Script
  };

  const formBody = Object.keys(payload)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(payload[key])
    )
    .join("&");

  try {
    // 1. Send to Google Sheets
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    });

    const rawText = await res.text();
    console.log("🔍 Raw Response from Google Sheet:", rawText);

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (err) {
      throw new Error("Script error: Response was not valid JSON");
    }

    if (!res.ok || result.status !== "success") {
      throw new Error("Script error: " + (result.message || "Unknown"));
    }

    // 2. Send email via EmailJS
    await emailjs.send(
      "service_u3azvcp",       // e.g., "service_gmail123"
      "template_xvu93vc",      // e.g., "template_abcd1234"
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        lookingFor: formData.lookingFor,
        tab: type,
      },
      "tZQ0ASGeN6zhWzbEe"        // e.g., "pu_XXXXXX"
    );

    // 3. Download brochure if type is brochure
    if (type === "brochure") {
      const link = document.createElement("a");
      link.href = "/brochure.pdf";
      link.download = "Manglam-Pinkwest-Brochure.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    return { success: true };
  } catch (err) {
    console.error("❌ Submission error:", err.message);
    return { success: false, error: err.message };
  }
};
