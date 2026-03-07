"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import WaitlistModal from "./WaitlistModal";

type ModalType = "engineer" | "company";

interface ModalContextType {
    openModal: (type: ModalType, plan?: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useModal must be used within ModalProvider");
    return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState<ModalType>("engineer");
    const [plan, setPlan] = useState<string | undefined>();

    const openModal = useCallback((t: ModalType, p?: string) => {
        setType(t);
        setPlan(p);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <WaitlistModal
                isOpen={isOpen}
                onClose={closeModal}
                type={type}
                plan={plan}
            />
        </ModalContext.Provider>
    );
}
