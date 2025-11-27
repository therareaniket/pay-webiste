"use client"

import Image from "next/image";

export default function HomePayIntro() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="redefine-payment-wrapper">
                        <div className="redefine-pymt-details">
                            <h2>Redefining Clinical Trial Payments</h2>

                            <p className="h6 text-rg">DhatuPay delivers secure, compliant clinical trial payments tailored for Sponsors, CROs, Sites, and Participants. This platform automates complex workflows for fast, transparent global payouts, eliminating delays and compliance risks.</p>

                            <p className="h6 text-rg">Bridge all stakeholders with reliable, real-time payment solutions that boost trial efficiency worldwide.</p>
                        </div>

                        <div className="redefine-pymt-growth">
                            <div className="err-redc-center">
                                <Image src="/images/homepage/payment-error-reduction.svg" alt="payment-error-reduction" width={375} height={375} className="center-pie"></Image>

                                <Image src="/images/homepage/error-reduction-spike-left.svg" alt="reduction-spike-left" width={215} height={108} className="reduction-spike-left"></Image>

                                <Image src="/images/homepage/error-reduction-spike-right.svg" alt="reduction-spike-left" width={142} height={108} className="reduction-spike-right"></Image>

                                <div className="faster-cycle site-radius-20">
                                    <p className="h5" style={{ marginBottom: 0, }}>30-50%</p>

                                    <p>Faster Cycle Times</p>
                                </div>

                                <div className="payout-success site-radius-20">
                                    <p className="h5" style={{ marginBottom: 0, }}>99%+</p>

                                    <p>Payout Success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}