import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ background: '#020617', borderRadius: '20%' }}
            >
                <path d="M25 25 L45 75 Q 50 85 55 75 L 75 25" stroke="#3DF2B5" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="42" y="55" width="16" height="16" fill="#fff" rx="2" />
            </svg>
        ),
        {
            ...size,
        }
    )
}
