export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Primary Kinetic V */}
        <path d="M20 35 L45 75 L80 15" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="75" r="7" fill="currentColor" />
    </svg>;
}
