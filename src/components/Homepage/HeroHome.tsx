"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {

    useEffect(() => {
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

                <div className="container">
                    <div className="hero-details-wrapper">
                        <div className="home-hero-details">

                            {/* H1 with animation class */}
                            <h1 className="text-sb hero-title animate-on-scroll">
                                Simplifying Global Clinical Trial Payments
                            </h1>

                            {/* Paragraph with animation class */}
                            <p className="h6 text-rg hero-desc animate-on-scroll">
                                Effortless, compliant, and timely payments for Sponsors, CROs, Sites, and Participants. Our platform streamlines clinical trial payments with full transparency, accelerating every step from invoicing to payout worldwide.
                            </p>

                            <div className="home-hero-cta">
                                {/* Button 1 */}
                                <Link
                                    href="/Contact"
                                    title="Book a Demo"
                                    className="link-padding link-radius text-20 text-md btn-tranpearent hero-btn hero-btn-1 animate-on-scroll"
                                >
                                    Book a Demo
                                </Link>

                                {/* Button 2 */}
                                <Link
                                    href="/ComingSoon"
                                    title="Explore Product"
                                    className="link-padding link-radius text-20 text-md btn-blue hero-btn hero-btn-2 animate-on-scroll"
                                >
                                    Explore Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
