"use client"

import Image from "next/image";

export default function CoreCapabilities() {
    return (
        <>
            <section className="section core-capabiblities">
                <div className="container">
                    <div className="capabiblity-wrapper">
                        <div className="core-capablty-headings">
                            <h2>Core Capabilities Powering DhatuPay</h2>

                            <p className="h6 text-rg">Secure, compliant clinical trial payments with global automation, AI insights, and built-in compliance.</p>
                        </div>

                        <div className="capablty-lists-wrapper">
                            <div className="capablty-lists">
                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-globe-coverage.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Global Coverage</h5>

                                        <p>Manage multi-currency transactions, FX conversions, and regional tax regulations seamlessly.</p>
                                    </div>
                                </div>

                                <span className="capablty-divider"></span>

                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-ai-automation.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>AI-Powered Automation</h5>

                                        <p>Intelligent algorithms predict, optimize, and execute payment workflows efficiently.</p>
                                    </div>
                                </div>
                            </div>

                            <span className="capablty-lists-divider"></span>

                            <div className="capablty-lists">
                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-auto-payments.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Automated Payments</h5>

                                        <p>Streamline disbursements and approvals with smart, hands-free workflows.</p>
                                    </div>
                                </div>

                                <span className="capablty-divider"></span>

                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-in-built-compliance.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Compliance Built-In</h5>

                                        <p>Achieve 21 CFR Part 11 readiness with KYC/AML checks and automated tax enforcement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="capablty-lists-responsive-wrapper">
                            <div className="capablty-lists">
                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-globe-coverage.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Global Coverage</h5>

                                        <p>Manage multi-currency transactions, FX conversions, and regional tax regulations seamlessly.</p>
                                    </div>
                                </div>

                                {/* <span className="capablty-divider"></span> */}

                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-ai-automation.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>AI-Powered Automation</h5>

                                        <p>Intelligent algorithms predict, optimize, and execute payment workflows efficiently.</p>
                                    </div>
                                </div>

                                {/* <span className="capablty-divider"></span> */}

                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-auto-payments.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Automated Payments</h5>

                                        <p>Streamline disbursements and approvals with smart, hands-free workflows.</p>
                                    </div>
                                </div>

                                {/* <span className="capablty-divider"></span> */}

                                <div className="capablty-list">
                                    <div className="capablty-icon site-radius-10">
                                        <Image src="/images/homepage/icon-in-built-compliance.svg" alt="capability-icon-1" width={32} height={32} className=""></Image>
                                    </div>

                                    <div className="list-details">
                                        <h5>Compliance Built-In</h5>

                                        <p>Achieve 21 CFR Part 11 readiness with KYC/AML checks and automated tax enforcement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}