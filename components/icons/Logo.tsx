export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Lounge: Rounded V (Seat) */}
            <path d="M25 25 L45 75 Q 50 85 55 75 L 75 25" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            {/* The Occupant: Rounded Square */}
            <rect x="42" y="55" width="16" height="16" fill="currentColor" rx="2" />
        </svg>
    );
}
