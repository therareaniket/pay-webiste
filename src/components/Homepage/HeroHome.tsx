"use client"

import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
    return (
        <>
            <section className="section hero-home site-hero">
                <span className="light-orange-box"></span>
                
                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} className="site-hero-blob"></Image>
                
                <div className="container">
                    <div className="home-hero-details">
                        <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1>

                        <p className="h6 text-rg">Effortless, compliant, and timely payments for Sponsors, CROs, Sites, and Participants. Our platform streamlines clinical trial payments with full transparency, accelerating every step from invoicing to payout worldwide.</p>

                        <div className="home-hero-cta">
                            <Link href="/Contact" className="link-padding link-radius text-20 text-md btn-tranpearent">Book a Demo</Link>

                            <Link href="/ComingSoon" className="link-padding link-radius text-20 text-md btn-blue">Explore Product</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}