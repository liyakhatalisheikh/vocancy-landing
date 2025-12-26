import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020617',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
                        <path d="M25 25 L45 75 Q 50 85 55 75 L 75 25" stroke="#3DF2B5" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="42" y="55" width="16" height="16" fill="#fff" rx="2" />
                    </svg>
                    <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: '-0.05em' }}>Vocancy</div>
                </div>
                <div style={{ marginTop: '40px', fontSize: 40, color: '#94a3b8' }}>Stop Applying. Start LeetCoding.</div>
                <div style={{ marginTop: '20px', fontSize: 30, color: '#34d399', fontFamily: 'monospace' }}>
                    Apply to 500+ jobs automatically
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
