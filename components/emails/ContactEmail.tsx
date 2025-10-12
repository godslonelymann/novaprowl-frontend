import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "24px",
      }}
    >
      <table
        width="100%"
        style={{
          maxWidth: "580px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 16px rgba(0, 164, 180, 0.08)",
        }}
      >
        <tr>
          <td style={{ padding: "32px" }}>
            {/* Header */}
            <h2
              style={{
                color: "#00A4B4",
                fontSize: "22px",
                margin: "0 0 12px 0",
                fontWeight: 700,
              }}
            >
              ✉️ New Contact Message
            </h2>
            <p
              style={{
                color: "#334155",
                fontSize: "15px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Someone just contacted NovaProwl through your website:
            </p>

            {/* Message box */}
            <div
              style={{
                background: "#f0fdfd",
                borderLeft: "4px solid #00A4B4",
                padding: "16px 20px",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            >
              <p
                style={{
                  color: "#0f172a",
                  fontSize: "15px",
                  whiteSpace: "pre-wrap",
                  margin: 0,
                }}
              >
                {message}
              </p>
            </div>

            {/* Sender info */}
            <table
              width="100%"
              style={{
                fontSize: "14px",
                color: "#334155",
                lineHeight: "1.8",
              }}
            >
              <tr>
                <td style={{ fontWeight: 600, width: "80px" }}>Name:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Email:</td>
                <td>
                  <a
                    href={`mailto:${email}`}
                    style={{ color: "#00A4B4", textDecoration: "none" }}
                  >
                    {email}
                  </a>
                </td>
              </tr>
            </table>

            {/* Footer */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e2e8f0",
                margin: "32px 0 16px",
              }}
            />
            <p
              style={{
                fontSize: "12px",
                color: "#64748b",
                textAlign: "center",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} <strong>NovaProwl</strong>.  

            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};
