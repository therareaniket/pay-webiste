"use client"

import Image from "next/image";

export default function FutureOfPayments(){
    return (
        <>
            <section className="section future-of-payments">
                <div className="container">
                    <div className="payment-headings">
                        <h2>The Future of Clinical Trial Payments</h2>

                        <p className="h6 text-rg">Global Reach with Local Regulatory Confidence</p>
                    </div>

                    <div className="future-payment-lists">
                        <div className="payment-list-item glass-bg">
                            <div className="item-details">
                                <Image src="/images/aboutpage/purple-side-border.svg" alt="purple-side-border" width={40} height={300} priority={false}></Image>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Challenge</h3>

                                    <ul>
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Multi-country regulations and diverse tax laws make compliance slow and complex.</span>
                                        </li>

                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Multiple currencies create reconciliation, FX, and conversion headaches.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Strict standards such as 21 CFR Part 11 and KYC/AML increase operational burden.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Manual workflows delay payments and frustrate sites, vendors, and participants.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-challenge-webp.webp" alt="pymnt-challenge" width={562} height={339} className="site-radius-20"></Image>
                        </div>

                        <div className="payment-list-item glass-bg">
                            <div className="item-details">
                                <Image src="/images/aboutpage/green-side-border.svg" alt="purple-side-border" width={40} height={300} priority={false}></Image>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Solution</h3>

                                    <ul>
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Built-in support for global regulations (21 CFR Part 11, KYC/AML) to stay compliant by design.</span>
                                        </li>

                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">A single platform for budgeting, invoicing, reconciliation, and disbursements.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Configurable jurisdiction packs for US, EU, and India tax and e-invoicing rules.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Multi‑currency capabilities with accurate, automated conversions.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-solutions-webp.webp" alt="pymnt-challenge" width={562} height={339} className="site-radius-20"></Image>
                        </div>

                        <div className="payment-list-item glass-bg">
                            <div className="item-details">
                                <Image src="/images/aboutpage/purple-side-border.svg" alt="purple-side-border" width={40} height={300} priority={false}></Image>

                                <div className="detailed-text">
                                    <h3 className="h5 text-md">The Difference</h3>

                                    <ul>
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Purpose-built for life sciences, optimized for clinical trial payment workflows—not a generic ERP.</span>
                                        </li>

                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Event-driven automation that triggers payments from CTMS/EDC data, cutting manual steps and delays.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Compliance-first architecture with 21 CFR Part 11, KYC, and AML embedded for regulatory assurance.</span>
                                        </li>
                                       
                                        <li>
                                            <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                            <span className="text-18">Global scale with local compliance via jurisdiction packs for the US, EU, and India.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Image src="/images/aboutpage/future-pymnt-diffrence.webp" alt="pymnt-challenge" width={562} height={339} className="site-radius-20"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}