import * as React from "react";

interface Props {
  orderId: string;
  paymentId: string;
  email: string;
}

export const PaymentSuccessEmail = ({ orderId, paymentId, email }: Props) => (
  <div
    style={{
      fontFamily: "Inter, Arial, sans-serif",
      backgroundColor: "#f9fbfc",
      padding: "32px",
    }}
  >
    <div
      style={{
        maxWidth: "580px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        padding: "32px",
      }}
    >
      <h2
        style={{
          color: "#00A4B4",
          fontSize: "22px",
          marginBottom: "12px",
        }}
      >
        ✅ Payment Successful
      </h2>

      <p style={{ color: "#334155", fontSize: "15px" }}>
        Thank you for upgrading to the <strong>NovaProwl Pro Plan</strong>!  
        We’ve received your payment and your account is now fully unlocked.
      </p>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          background: "#f0fdfd",
          borderRadius: "8px",
          borderLeft: "4px solid #00A4B4",
        }}
      >
        <p style={{ margin: "4px 0", color: "#0f172a" }}>
          <strong>Order ID:</strong> {orderId}
        </p>
        <p style={{ margin: "4px 0", color: "#0f172a" }}>
          <strong>Payment ID:</strong> {paymentId}
        </p>
        <p style={{ margin: "4px 0", color: "#0f172a" }}>
          <strong>User Email:</strong> {email}
        </p>
      </div>

      <p
        style={{
          fontSize: "13px",
          color: "#64748b",
          marginTop: "28px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} NovaProwl • Empowering Data Intelligence
      </p>
    </div>
  </div>
);
