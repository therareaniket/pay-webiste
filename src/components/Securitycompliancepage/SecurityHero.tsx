"use client";

import Image from "next/image";
import React from "react";

const SolutionHero = () => {
    return (
            <section className="section sub-site-hero security-hero">
              <span className="light-orange-box"></span>
        
              <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>
        
              <div className="container">
                <div className="hero-details-wrapper">
                  <Image src="/images/securitypage/SecurityHeroImage.webp" alt="about-hero" width={539} height={304} priority={true}></Image>
        
                  <div className="subpage-hero-details">
                    <h1 className="text-sb">Where Compliance Leads, Security Thrives</h1>
                    {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}
        
                    <p className="h6 text-rg">DhatuPay is built for life sciences, combining global regulatory adherence with enterprise-grade security to protect every transaction. It supports frameworks like GxP and 21 CFR Part 11 while enforcing strong encryption, access controls, and immutable audit trails to keep your clinical payment data safe and audit-ready.</p>
                  </div>
                </div>
              </div>
            </section>

        // <section className="section hero-home site-hero solution-hero Security-hero">
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
        //                     src="/images/securitypage/SecurityHeroImage.webp"
        //                     alt="sol-hero"
        //                     width={539}
        //                     height={294}
        //                     priority={false}
        //                     className="sol-hero-img"
        //                 />

        //                 <div className="sol-hero-detail">
        //                     <h1 className="text-sb">Where Compliance Leads, Security Thrives</h1>

        //                     <p className="h6 text-rg">
        //                         DhatuPay is built for life sciences, combining global regulatory adherence with enterprise-grade security to protect every transaction. It supports frameworks like GxP and 21 CFR Part 11 while enforcing strong encryption, access controls, and immutable audit trails to keep your clinical payment data safe and audit-ready.
        //                     </p>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default SolutionHero;
