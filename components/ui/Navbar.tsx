"use client";
import React, { useState } from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useModal } from "./ModalProvider";

const navLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openModal } = useModal();

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleOpenModal = (type: "engineer" | "company") => {
        openModal(type);
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
                <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 text-brand-green group-hover:text-brand-green/80 transition-colors">
                            <Logo className="w-full h-full" />
                        </div>
                        <span className="font-bold text-xl text-foreground font-sans tracking-tight">Vocancy</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {link.label}
                            </Link>
                        ))}
                        <ModeToggle />
                        <button
                            onClick={() => handleOpenModal("engineer")}
                            className="text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
                        >
                            Get Vetted
                        </button>
                        <button
                            onClick={() => handleOpenModal("company")}
                            className="bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            Hire Engineers
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <ModeToggle />
                        <button
                            className="text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5 duration-300">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-muted-foreground py-2 hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                        <hr className="border-border my-2" />
                        <button
                            onClick={() => handleOpenModal("engineer")}
                            className="borderless-glass text-foreground py-3 rounded-full font-bold text-sm w-full active:scale-95 transition-all"
                        >
                            Get Vetted
                        </button>
                        <button
                            onClick={() => handleOpenModal("company")}
                            className="bg-foreground text-background py-3 rounded-full font-bold text-sm w-full active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Hire Engineers
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}
