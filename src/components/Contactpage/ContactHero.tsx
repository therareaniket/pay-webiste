"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const ContactHeroAnimate =  { 
    ltrInitial: { x: -100, opacity: 0 },
    ltrAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },

    ttbText: {  y: -50, opacity: 0 },
    ttbTextAnimate: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
    
    ttbTextDelayed: {  y: -50, opacity: 0 },
    ttbTextAnimateDelayed: { y: 0, opacity: 1, transition: { duration: 1, delay: 2 } },
}

const ContactHero = () => {
    return (
        <section className="section sub-site-hero contact-hero">
            <span className="light-orange-box"></span>

            <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

            <div className="container">
                <div className="hero-details-wrapper">
                    <motion.div className="" variants={ContactHeroAnimate} initial="ltrInitial" animate="ltrAnimate" viewport={{ once: true }}>
                        <Image src="/images/contactpage/contact-hero-img-new-webp.webp" alt="about-hero" width={578} height={260} priority={true}></Image>
                    </motion.div>

                    <div className="subpage-hero-details">
                        <motion.h1 className="text-sb" variants={ContactHeroAnimate} initial="ttbText" animate="ttbTextAnimate" viewport={{ once: true }}>Your Payment Questions, Answered Securely</motion.h1>
                        {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}

                        <motion.p className="h6 text-rg" variants={ContactHeroAnimate} initial="ttbTextDelayed" animate="ttbTextAnimateDelayed" viewport={{ once: true }}>Purpose-built for life sciences, DhatuPay automates global trial payments with a compliance-first architecture, real-time visibility, and event-driven workflows that keep every stakeholder in sync.</motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
