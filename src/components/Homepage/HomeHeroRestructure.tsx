'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomeHeroRestructure() {
    return (
        <>
            <section className="home-hero-main-wrapper section"  >
                <div className="container">
                    <div className="home-hero-left-box"></div>
                    <div className="hero-background-circle">
                        <Image src="/images/homepage/site-hero-blob.svg" alt="hero-background-circle" width={600} height={600} draggable={false} priority={true}></Image>
                    </div>
                    <Image src="/images/homepage/hero-home-hand.webp" alt="hero-home-hand" width={700} height={813} draggable={false} priority={true} className="hero-hand-left"></Image>

                    <div className="home-left-arrow-wrapper">
                        <Image src="/images/homepage/hero-home-circle.svg" className="hero-circle-arrow-text" alt="hero-home-arrow" width={80} height={80} draggable={false} priority={true}>
                        </Image>
                        <Link href="/Contact#contactForm" className="hero-circle-arrow-backgorund">
                            <Image className="hero-circle-arrow" src="/images/homepage/hero-circle-arrow.svg" alt="hero-home-arrow" width={9} height={9} draggable={false} priority={true}></Image>
                        </Link>
                    </div>
                    <div className="home-hero-detail-text">
                        <div className="home-hero-text-wrapper">
                            <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1>

                            <p className="h6 text-rg">Secure, compliant, and fast payouts for Sponsors, CROs, Sites, and participants , streamlining every step of clinical trial payments with transparency and efficiency.</p>

                            <div className="home-hero-button-wrapper">
                                <Link href="/Contact#contactForm" className="link-padding btn-white text-18 text-rg site-radius-50">Book a Demo</Link>
                                <Link href="/Contact#contactForm" className="link-padding btn-blue text-rg text-md site-radius-50">Explore Product</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-stripe-wrapper">
                    <div className="home-stripe-1">
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                        <h6>Pay Smarter, Faster</h6>
                        <h6>*</h6>
                    </div>
                </div>

            </section>
        </>
    );
}