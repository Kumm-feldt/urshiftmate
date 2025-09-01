import React from "react";

export default function Policy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for UrShiftMate</h1>
      <p style={styles.effectiveDate}>Effective Date: 09/01/2025</p>
      <p style={styles.paragraph}>
        UrShiftMate (“we,” “our,” or “us”) respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and protect your information when you use our
        application.
      </p>

      <h2 style={styles.subtitle}>1. Information We Collect</h2>
      <p style={styles.paragraph}>
        When you sign in with your Google account, we only access the following
        information:
      </p>
      <ul style={styles.list}>
        <li>Basic profile info: Your name and email address.</li>
        <li>
          Google Calendar data (read-only): We only read your calendar events;
          we do not edit or delete any events.
        </li>
      </ul>

      <h2 style={styles.subtitle}>2. How We Use Your Information</h2>
      <ul style={styles.list}>
        <li>Display your calendar events in UrShiftMate.</li>
        <li>Personalize your experience in the app.</li>
      </ul>

      <h2 style={styles.subtitle}>3. Data Sharing</h2>
      <p style={styles.paragraph}>
        We do not share, sell, or distribute your personal information or
        calendar data with third parties.
      </p>

      <h2 style={styles.subtitle}>4. Data Security</h2>
      <p style={styles.paragraph}>
        We take reasonable measures to protect your information from
        unauthorized access or disclosure.
      </p>

      <h2 style={styles.subtitle}>5. Your Choices</h2>
      <p style={styles.paragraph}>
        You can revoke access to your Google account at any time by visiting
        your Google Account Permissions page.
      </p>

      <h2 style={styles.subtitle}>6. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p style={styles.contact}>
        Email: <a href="mailto:anthonykummerfeldt@gmail.com">anthonykummerfeldt@gmail.com</a>
        <br />
        Website: <a href="https://urshiftmate.com">https://urshiftmate.com</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    textAlign: "center",
    color: "#222",
  },
  effectiveDate: {
    fontSize: "0.95rem",
    textAlign: "center",
    color: "#555",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginTop: "25px",
    marginBottom: "10px",
    color: "#444",
  },
  paragraph: {
    marginBottom: "15px",
  },
  list: {
    marginBottom: "15px",
    paddingLeft: "20px",
  },
  contact: {
    marginTop: "10px",
    fontWeight: "500",
  },
};