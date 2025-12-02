"use client";

import Image from "next/image";
import React from "react";

const ContactHero = () => {
    return (
        <section className="section hero-home site-hero solution-hero Contact-hero">
            {/* Background Elements */}
            <span className="light-orange-box"></span>

            <Image
                src="/images/homepage/site-hero-blob.svg"
                alt="site-hero-blob"
                width={600}
                height={600}
                draggable={false}
                className="site-hero-blob"
            />

            {/* Foreground Content */}
            <div className="container">
                <div className="sol-hero-text-wrapper">
                    <div className="sol-hero-text">

                        <Image
                            src="/images/contactpage/ContactHeroImage.webp"
                            alt="sol-hero"
                            width={539}
                            height={294}
                            priority={false}
                            className="sol-hero-img"
                        />

                        <div className="sol-hero-detail">
                            <h1 className="text-sb">Your Payment Questions, Answered Securely</h1>

                            <p className="h6 text-rg">
                                Reach out for seamless payments, secure transactions, and effortless integration—across every platform and partner
                            </p>
                        </div>

                    </div>
                </div>
            </div>  
        </section>
    );
};

export default ContactHero;
