"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CoreCapabilities() {

    useEffect(() => {
        const verticalLines = document.querySelectorAll<HTMLElement>(".capablty-lists-divider");
        const horizontalLines = document.querySelectorAll<HTMLElement>(".capablty-divider");
        const textBlocks = document.querySelectorAll<HTMLElement>(".capablty-list");

        // ----------------------- HEIGHT ANIMATION -----------------------
        const animateHeight = (el: HTMLElement, toHeight: number, duration = 2200) => {
            let start: number | null = null;

            const animate = (timestamp: number) => {
                if (start === null) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                el.style.height = progress * toHeight + "px";
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        // ----------------------- WIDTH ANIMATION ------------------------
        const animateWidth = (el: HTMLElement, toWidth: number, duration = 2200) => {
            let start: number | null = null;

            const animate = (timestamp: number) => {
                if (start === null) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                el.style.width = progress * toWidth + "px";
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        // ----------------------- OBSERVER -------------------------------
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate VERTICAL LINES
                        verticalLines.forEach((line) => {
                            const parent = line.parentElement as HTMLElement | null;
                            if (!parent) return;
                            const targetHeight = parent.clientHeight;
                            animateHeight(line, targetHeight);
                        });

                        // Animate HORIZONTAL LINES
                        horizontalLines.forEach((line) => {
                            const parent = line.parentElement as HTMLElement | null;
                            if (!parent) return;
                            const targetWidth = parent.clientWidth;
                            animateWidth(line, targetWidth);
                        });

                        const animationOrder = [
                            0, // Left #1 (Global Coverage)
                            2, // Right #1 (Automated Payments)
                            1, // Left #2 (AI Automation)
                            3  // Right #2 (Compliance Built-In)
                        ];

                        animationOrder.forEach((blockIndex, i) => {
                            const block = textBlocks[blockIndex];
                            if (!block) return;
                            block.classList.add("capability-animate");
                            block.style.animationDelay = `${i * 1}s`;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector(".core-capabiblities");
        if (section) observer.observe(section);
    }, []);

    return (
        <section className="section core-capabiblities">
            <div className="container">
                <div className="capabiblity-wrapper">

                    <div className="core-capablty-headings">
                        <h2>Core Capabilities Powering DhatuPay</h2>
                        <p className="h6 text-rg">
                            Secure, compliant clinical trial payments with global automation,
                            AI insights, and built-in compliance.
                        </p>
                    </div>

                    <div className="capablty-lists-wrapper">
                        {/* LEFT BLOCK */}
                        <div className="capablty-lists capablty-left-lists">
                            <div className="capablty-list capablty-left-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-globe-coverage.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Global Coverage</h5>
                                    <p>Manage multi-currency transactions, FX conversions, and regional tax regulations seamlessly.</p>
                                </div>
                            </div>

                            <span className="capablty-divider capability-gradient"></span>

                            <div className="capablty-list capablty-left-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-ai-automation.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>AI-Powered Automation</h5>
                                    <p>Intelligent algorithms predict, optimize, and execute payment workflows efficiently.</p>
                                </div>
                            </div>
                        </div>

                        {/* VERTICAL DIVIDER */}
                        <span className="capablty-lists-divider capability-gradient"></span>

                        {/* RIGHT BLOCK */}
                        <div className="capablty-lists capablty-right-lists">
                            <div className="capablty-list capablty-right-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-auto-payments.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Automated Payments</h5>
                                    <p>Streamline disbursements and approvals with smart, hands-free workflows.</p>
                                </div>
                            </div>

                            <span className="capablty-divider capability-gradient"></span>

                            <div className="capablty-list capablty-right-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-in-built-compliance.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Compliance Built-In</h5>
                                    <p>Achieve 21 CFR Part 11 readiness with KYC/AML checks and automated tax enforcement.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="capablty-responsive-lists-wrapper">
                                                <div className="capablty-lists capablty-left-lists">
                            <div className="capablty-list capablty-left-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-globe-coverage.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Global Coverage</h5>
                                    <p>Manage multi-currency transactions, FX conversions, and regional tax regulations seamlessly.</p>
                                </div>
                            </div>


                            <div className="capablty-list capablty-left-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-ai-automation.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>AI-Powered Automation</h5>
                                    <p>Intelligent algorithms predict, optimize, and execute payment workflows efficiently.</p>
                                </div>
                            </div>
                        </div>

                                                <div className="capablty-lists capablty-right-lists">
                            <div className="capablty-list capablty-right-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-auto-payments.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Automated Payments</h5>
                                    <p>Streamline disbursements and approvals with smart, hands-free workflows.</p>
                                </div>
                            </div>



                            <div className="capablty-list capablty-right-list">
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-in-built-compliance.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>Compliance Built-In</h5>
                                    <p>Achieve 21 CFR Part 11 readiness with KYC/AML checks and automated tax enforcement.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
