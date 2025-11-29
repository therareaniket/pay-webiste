"use client"

import Image from "next/image";

export default function Pricing(){
    return (
        <>
            <section className="section pricing">
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="pricing-left-pillar site-radius-20">
                            <div className="pillar-details">
                                <h3><span className="text-black">Save time with</span> DhatuPay.</h3>

                                <p>Manage budgets, automate payouts, and ensure compliance—all in one platform. Choose our Standard plan or upgrade to Pro for advanced features and global support.</p>

                                <p>Enjoy a 14-day free trial of Pro, then select the plan that fits your needs best.</p>
                            </div>

                            <Image src="/images/homepage/pricing-pillar-img.webp" alt="pricing-pillar-img" width={432} height={327} priority={false}></Image>
                        </div>

                        <div className="pricing-plan-details">
                            <div className="pricing-headings">
                                <h2>Flexible Pricing for Every Clinical Operation</h2>

                                <p className="h6 text-rg">Choose from Standard or Enterprise plans designed for your clinical trial operations. Scale seamlessly with Dhatu Pay's two-tier pricing that fits every business need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}