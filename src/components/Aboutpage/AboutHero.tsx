"use client"

import Image from "next/image";
import { motion } from 'framer-motion';

const AboutHeroAnimate =  { 
    ltrInitial: { x: -100, opacity: 0 },
    ltrAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },

    ttbText: {  y: -50, opacity: 0 },
    ttbTextAnimate: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
    
    ttbTextDelayed: {  y: -50, opacity: 0 },
    ttbTextAnimateDelayed: { y: 0, opacity: 1, transition: { duration: 1, delay: 2 } },
}

export default function AboutHero () {
    return (
        <>
            <section className="section sub-site-hero">
                <span className="light-orange-box"></span>
                
                <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>

                <div className="container">
                    <div className="hero-details-wrapper">
                        <motion.div className="" variants={AboutHeroAnimate} initial="ltrInitial" animate="ltrAnimate" viewport={{ once: true }}>
                            <Image src="/images/aboutpage/about-hero-showcase-webp.webp" alt="about-hero" width={570} height={367} priority={true}></Image>
                        </motion.div>

                        <div className="subpage-hero-details">
                            <motion.h1 className="text-sb" variants={AboutHeroAnimate} initial="ttbText" animate="ttbTextAnimate" viewport={{ once: true }}>The Intelligent Engine Behind Every Payment</motion.h1>
                            {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}

                            <motion.p className="h6 text-rg" variants={AboutHeroAnimate} initial="ttbTextDelayed" animate="ttbTextAnimateDelayed" viewport={{ once: true }}>Purpose-built for life sciences, DhatuPay automates global trial payments with a compliance-first architecture, real-time visibility, and event-driven workflows that keep every stakeholder in sync.</motion.p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}