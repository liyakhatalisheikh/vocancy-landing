"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
            <div className="w-full max-w-md p-8 border border-red-500/20 bg-red-500/5 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold mb-4 font-sans">Something went wrong!</h2>
                <p className="text-muted-foreground mb-8 text-sm">
                    We apologize for the inconvenience. Our team has been notified.
                </p>

                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                </button>
            </div>
        </div>
    );
}
