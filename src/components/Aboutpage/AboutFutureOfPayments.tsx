"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function FutureOfPayments() {

    useEffect(() => {
        const svgs = document.querySelectorAll(".animate-svg");
        const texts = document.querySelectorAll(".detailed-text");

const startSVG = (svg: Element) => {
    const animations = svg.querySelectorAll("animate");

    animations.forEach((a) => {
        (a as SVGAnimateElement).beginElement();
    });
};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target as HTMLElement;

                    // SVG animation trigger
                    if (el.classList.contains("animate-svg")) {
                        startSVG(el);
                    }

                    // TEXT animation trigger
                    if (el.classList.contains("detailed-text")) {
                        el.classList.add("animate-in");
                    }

                    observer.unobserve(el);
                });
            },
            { threshold: 0.3 }
        );

        svgs.forEach((svg) => observer.observe(svg));
        texts.forEach((txt) => observer.observe(txt));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Text Animation CSS */}
            <style>{`
                .detailed-text {
                    opacity: 0;
                    transform: translateX(-80px);
                    transition: all 0.7s ease-out;
                }
                .detailed-text.animate-in {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>

            <section className="section future-of-payments">
                <div className="container">

                    {/* Heading */}
                    <div className="payment-headings">
                        <h2>The Future of Clinical Trial Payments</h2>
                        <p className="h6 text-rg">Global Reach with Local Regulatory Confidence</p>
                    </div>

                    <div className="future-payment-lists">

                        {/* -------------------------------------- */}
                        {/* PURPLE SECTION */}
                        {/* -------------------------------------- */}
                        <div className="payment-list-item payment-purple-section glass-bg">
                            <div className="item-details">

                                <svg className="animate-svg" width="40" height="296" viewBox="0 0 40 296" fill="none">
                                    <line x1="20" y1="296" x2="20" y2="296" stroke="white" strokeWidth="2">
                                        <animate attributeName="y2" from="296" to="42" dur="1s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="stroke" from="white" to="#561FF9" dur="0.2s" begin="indefinite" fill="freeze" />
                                    </line>

                                    <circle cx="20" cy="20" r="20" fill="#561FF9" opacity="0">
                                        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="r" values="20;24;20" dur="0.6s" begin="indefinite" fill="freeze" />
                                    </circle>

                                    <path
                                        d="M18.2454 25L13 19.7859L14.3113 18.4823L18.2454 22.3929L26.6887 14L28 15.3035L18.2454 25Z"
                                        fill="white"
                                        opacity="0"
                                    >
                                        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="indefinite" fill="freeze" />
                                    </path>
                                </svg>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Challenge</h3>
                                    <ul>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Multi-country regulations and diverse tax laws make compliance slow and complex.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Multiple currencies create reconciliation, FX, and conversion headaches.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Strict standards such as 21 CFR Part 11 and KYC/AML increase operational burden.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Manual workflows delay payments and frustrate sites, vendors, and participants.</li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-challenge-webp.webp" alt="" width={562} height={339} className="site-radius-20" />
                        </div>


                        {/* -------------------------------------- */}
                        {/* GREEN SECTION */}
                        {/* -------------------------------------- */}
                        <div className="payment-list-item payment-green-section glass-bg">
                            <div className="item-details">

                                <svg className="animate-svg" width="40" height="296" viewBox="0 0 40 296" fill="none">
                                    <line x1="20" y1="296" x2="20" y2="296" stroke="white" strokeWidth="2">
                                        <animate attributeName="y2" from="296" to="42" dur="1s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="stroke" from="white" to="#189525" dur="0.2s" begin="indefinite" fill="freeze" />
                                    </line>

                                    <circle cx="20" cy="20" r="20" fill="#189525" opacity="0">
                                        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="r" values="20;24;20" dur="0.6s" begin="indefinite" fill="freeze" />
                                    </circle>

                                    <path
                                        d="M18.2454 25L13 19.7859L14.3113 18.4823L18.2454 22.3929L26.6887 14L28 15.3035L18.2454 25Z"
                                        fill="white"
                                        opacity="0"
                                    >
                                        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="indefinite" fill="freeze" />
                                    </path>
                                </svg>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Solution</h3>
                                    <ul>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Built-in support for global regulations (21 CFR Part 11, KYC/AML).</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />A single platform for budgeting, invoicing, reconciliation, and disbursements.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Jurisdiction packs for US, EU, and India tax and e-invoicing rules.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Multi-currency capabilities with accurate, automated conversions.</li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-solutions-webp.webp" alt="" width={562} height={339} className="site-radius-20" />
                        </div>


                        {/* -------------------------------------- */}
                        {/* BLUE SECTION */}
                        {/* -------------------------------------- */}
                        <div className="payment-list-item payment-blue-section glass-bg">
                            <div className="item-details">

                                <svg className="animate-svg" width="40" height="296" viewBox="0 0 40 296" fill="none">
                                    <line x1="20" y1="296" x2="20" y2="296" stroke="white" strokeWidth="2">
                                        <animate attributeName="y2" from="296" to="42" dur="1s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="stroke" from="white" to="#053EFF" dur="0.2s" begin="indefinite" fill="freeze" />
                                    </line>

                                    <circle cx="20" cy="20" r="20" fill="#053EFF" opacity="0">
                                        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="indefinite" fill="freeze" />
                                        <animate attributeName="r" values="20;24;20" dur="0.6s" begin="indefinite" fill="freeze" />
                                    </circle>

                                    <path
                                        d="M18.2454 25L13 19.7859L14.3113 18.4823L18.2454 22.3929L26.6887 14L28 15.3035L18.2454 25Z"
                                        fill="white"
                                        opacity="0"
                                    >
                                        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="indefinite" fill="freeze" />
                                    </path>
                                </svg>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Difference</h3>
                                    <ul>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Purpose-built for life sciences, optimized for clinical trial workflows.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Event-driven automation from CTMS/EDC data.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Compliance-first architecture with 21 CFR Part 11, KYC, AML.</li>
                                        <li><Image src="/images/homepage/pricing-includes-check-white.svg" width={15} height={11} alt="" />Global scale with local rules via jurisdiction packs.</li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-diffrence.webp" alt="" width={562} height={339} className="site-radius-20" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
