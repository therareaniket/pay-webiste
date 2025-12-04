"use client"

import Image from "next/image";

export default function SeamlessPayments() {
    return (
        <>
            <section className="section seamless-payment">
                <div className="container">
                    <div className="smls-pymt-headings">
                        <h2>The Foundation of Seamless Payments</h2>

                        <p className="h6 text-rg">Four core capabilities powering secure, compliant clinical trial payments.</p>
                    </div>

                    <Image src="/images/homepage/seamless-payment-updated.webp" alt="seamless-payment" width={870} height={551}></Image>

                    <div className="smls-pymt-details">
                        <div className="smls-pymt-box-wrapper">
                            <div className="pymt-box">
                                <h5>Plan & Configure</h5>

                                <p className="text-18">Design budgets, set FX and tax rules, and integrate systems effortlessly to ensure accurate financial planning.</p>
                            </div>

                            <div className="pymt-box">
                                <h5>Govern & Comply</h5>

                                <p className="text-18">Ensure KYC/AML screening, audit trails, and global regulatory compliance.</p>
                            </div>
                        </div>

                        <div className="smls-pymt-box-wrapper">
                            <div className="pymt-box">
                                <h5>Execute Payments</h5>

                                <p className="text-18">Process invoices, batch disbursements, and timely participant payouts securely.</p>
                            </div>

                            <div className="pymt-box">
                                <h5>Operate & Optimize</h5>

                                <p className="text-18">Reconcile transactions via analytics dashboards and automated workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}