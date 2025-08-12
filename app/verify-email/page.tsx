'use client';

import { useEffect, useRef, useState } from "react";
import EmailVerificationMessage from "./EmailVerified";
import Verifying from "./Verifying";

const EmailVerification = () => {
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [verificationError, setVerificationError] = useState<string | null>(null);
    const hasRun = useRef(false);

    useEffect(() => {
        // Extract token from URL search params (client-side only)
        const params = new URLSearchParams(window.location.search);
        const urlToken = params.get("token");
        setToken(urlToken);
    }, []);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                console.log("Verifying email...");
                const response = await fetch(`/api/auth/verify-email?token=${token}`);
                if (response.ok) {
                    console.log("Email verification successful");
                } else {
                    setVerificationError(
                        "Your email has already been verified! Stay tuned for the latest updates on ConUHacks X, arriving in your inbox soon!"
                    );
                }
            } catch (error) {
                console.error("Error verifying email:", error);
                setVerificationError("Error verifying email. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (token === null) return; // wait until token is set

        if (!token) {
            setVerificationError("No email verification token found. Please verify your email.");
            setLoading(false);
            return;
        }

        if (!hasRun.current) {
            hasRun.current = true;
            setTimeout(() => {
                verifyEmail();
            }, 4000);
        }
    }, [token]);

    const getState = () => {
        if (loading) return <Verifying />;

        if (verificationError) {
            return (
                <div className="flex text-white items-center justify-center mt-10 max-w-xl mx-auto h-[calc(100vh-140px)]">
                    <h1 className="text-white text-center text-lg">
                        {verificationError}
                    </h1>
                </div>
            );
        }

        return <EmailVerificationMessage />;
    };

    return (
        <section className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto">
            {getState()}
        </section>
    );
};

export default EmailVerification;
