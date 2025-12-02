"use client"

import Image from "next/image";

export default function AboutHero () {
    return (
        <>
            <section className="section sub-site-hero">
                <span className="light-orange-box"></span>
                
                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

                <div className="container">
                    <div className="hero-details-wrapper">
                        <Image src="/images/aboutpage/about-hero-showcase-webp.webp" alt="about-hero" width={570} height={367} priority={true}></Image>

                        <div className="subpage-hero-details">
                            <h1 className="text-sb">The Intelligent Engine Behind Every Payment</h1>
                            {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}

                            <p className="h6 text-rg">Purpose-built for life sciences, DhatuPay automates global trial payments with a compliance-first architecture, real-time visibility, and event-driven workflows that keep every stakeholder in sync.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}