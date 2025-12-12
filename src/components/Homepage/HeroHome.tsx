"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type HeroHomeProps = {
    heroTitle: string;
    heroSubtitle: string;
    heroCta1?: { url: string; title: string } | null;
    heroCta2?: { url: string; title: string } | null;
}

export default function HeroHome( { heroTitle, heroSubtitle, heroCta1, heroCta2 }:HeroHomeProps ) {

useEffect(() => {
    // --- HAND ANIMATION ON PAGE LOAD --- //
    const hand = document.querySelector(".home-hero-hand");

    if (hand) {
        requestAnimationFrame(() => {
            hand.classList.add("hero-hand-active");
        });
    }

    // --- TEXT & BUTTON ANIMATIONS (your existing code) --- //
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-active");
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);


    return (
        <>
            <section className="section hero-home site-hero">
                <span className="light-orange-box"></span>

                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

                <div className="home-stripe">
                    <div className="stripe-slogan">
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>

                        {/* </div> */}


                        {/* <div className="stripe-slogan"> */}
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                        <span className="h5 text-sb">Pay Smarter, Faster</span>
                        <Image src="/images/homepage/home-stripe-star.svg" alt="stripe-star" width={20} height={20} className="h5 text-sb"></Image>
                    </div>

                    <span className="h5 text-sb">Pay Smarter, Faster</span>
                </div>

                <Image src="/images/homepage/hero-home-hand.webp" alt="hero-home-hand" width={878} height={813} draggable={false} priority={true} className="home-hero-hand"></Image>

                <div className="circle-badge">
                    <Image src="/images/homepage/hero-home-circle.svg" alt="hero-badge" width={120} height={120}></Image>

                    <Link href="/ComingSoon" className="circle-arrow">
                        <Image src="/images/homepage/hero-circle-arrow.svg" alt="badge-arrow" width={16} height={16}></Image>
                    </Link>
                </div>
                
                <div className="container">
                    <div className="hero-details-wrapper">
                        <div className="home-hero-details">

                            {/* H1 with animation class */}
                            <h1 className="text-sb hero-title animate-on-scroll">
                                {heroTitle}
                            </h1>

                            {/* Paragraph with animation class */}
                            <p className="h6 text-rg hero-desc animate-on-scroll">
                                {heroSubtitle}
                            </p>
                            {/* <p className="h6 text-rg hero-desc animate-on-scroll">
                                Secure, compliant, and fast payouts for Sponsors, CROs, Sites, and participants , streamlining every step of clinical trial payments with transparency and efficiency.
                            </p> */}

                            <div className="home-hero-cta">
                                {/* Button 1 */}
                                {heroCta1 && (
                                    <Link href={heroCta1.url} title={heroCta1.title} className="btn-bg btn-padding text-md text-18">{heroCta1.title}</Link>
                                )}

                                {/* Button 2 */}
                                {heroCta2 && (
                                    <Link href={heroCta2.url} title={heroCta2.title} className="btn-bg btn-padding text-md text-18">{heroCta2.title}</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
