export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
            <div className="relative flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-brand-green/30 border-t-brand-green rounded-full animate-spin" />
                <div className="text-sm font-mono text-brand-green animate-pulse">Initializing...</div>
            </div>
        </div>
    );
}
