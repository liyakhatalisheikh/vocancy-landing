import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Vocancy | Stop Applying. Start Interviewing.";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#030303",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    fontFamily: "monospace",
                }}
            >
                {/* Background Aura */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "600px",
                        height: "600px",
                        background: "rgba(61, 242, 181, 0.05)",
                        filter: "blur(100px)",
                        borderRadius: "50%",
                    }}
                />

                {/* Logo Icon */}
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    fill="none"
                    style={{ marginBottom: "20px" }}
                >
                    <path d="M20 35 L45 75 L80 15" stroke="#3DF2B5" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="45" cy="75" r="6" fill="#3DF2B5" />
                </svg>

                {/* Brand Name */}
                <div style={{ fontSize: "64px", fontWeight: "bold", color: "white", marginBottom: "10px" }}>
                    Vocancy
                </div>

                {/* Tagline */}
                <div style={{ display: "flex", flexDirection: "column", fontSize: "32px", color: "white", textAlign: "center", maxWidth: "1000px", alignItems: "center", fontWeight: "bold" }}>
                    <span>Job Application Service for Software Engineers</span>
                    <span style={{ color: "#3DF2B5", marginTop: "15px", fontSize: "28px", fontFamily: "monospace" }}>We Apply. You Interview. You Win.</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
