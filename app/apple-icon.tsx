import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: "#030303",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                    <path d="M20 35 L45 75 L80 15" stroke="#3DF2B5" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="45" cy="75" r="7" fill="#3DF2B5" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
