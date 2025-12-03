"use client";

import Image from "next/image";
import React from "react";

const ContactHero = () => {
    return (
        <section className="section sub-site-hero contact-hero">
            <span className="light-orange-box"></span>

            <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

            <div className="container">
                <div className="hero-details-wrapper">
                    <Image src="/images/contactpage/ContactHeroImage.webp" alt="about-hero" width={578} height={260} priority={true}></Image>

                    <div className="subpage-hero-details">
                        <h1 className="text-sb">Your Payment Questions, Answered Securely</h1>
                        {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}

                        <p className="h6 text-rg">Purpose-built for life sciences, DhatuPay automates global trial payments with a compliance-first architecture, real-time visibility, and event-driven workflows that keep every stakeholder in sync.</p>
                    </div>
                </div>
            </div>
        </section>

        // <section className="section hero-home site-hero solution-hero Contact-hero">
        //     {/* Background Elements */}
        //     <span className="light-orange-box"></span>

        //     <Image
        //         src="/images/homepage/site-hero-blob.svg"
        //         alt="site-hero-blob"
        //         width={600}
        //         height={600}
        //         draggable={false}
        //         className="site-hero-blob"
        //     />

        //     {/* Foreground Content */}
        //     <div className="container">
        //         <div className="sol-hero-text-wrapper">
        //             <div className="sol-hero-text">

        //                 <Image
        //                     src="/images/contactpage/ContactHeroImage.webp"
        //                     alt="sol-hero"
        //                     width={539}
        //                     height={294}
        //                     priority={false}
        //                     className="sol-hero-img"
        //                 />

        //                 <div className="sol-hero-detail">
        //                     <h1 className="text-sb">Your Payment Questions, Answered Securely</h1>

        //                     <p className="h6 text-rg">
        //                         Reach out for seamless payments, secure transactions, and effortless integration—across every platform and partner
        //                     </p>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>  
        // </section>
    );
};

export default ContactHero;
