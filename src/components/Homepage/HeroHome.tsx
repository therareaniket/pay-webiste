"use client"

import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
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
                </div>

                <Image src="/images/homepage/hero-home-hand.webp" alt="hero-home-hand" width={878} height={813} draggable={false} priority={true} className="home-hero-hand"></Image>

                <div className="container">
                    <div className="hero-details-wrapper">
                        <div className="home-hero-details">
                            <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1>

                            <p className="h6 text-rg">Effortless, compliant, and timely payments for Sponsors, CROs, Sites, and Participants. Our platform streamlines clinical trial payments with full transparency, accelerating every step from invoicing to payout worldwide.</p>

                            <div className="home-hero-cta">
                                <Link href="/Contact" title="Book a Demo" className="link-padding link-radius text-20 text-md btn-tranpearent">Book a Demo</Link>

                                <Link href="/ComingSoon" title="Explore Product" className="link-padding link-radius text-20 text-md btn-blue">Explore Product</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}