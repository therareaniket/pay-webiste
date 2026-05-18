"use client";

import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

type SecurityHeroProps ={
	securityHeroTitle: string;
	securityHeroSubtitle: string;
}

const SecurityHeroAnimate =  { 
    ltrInitial1: { x: -100, opacity: 0 },
    ltrAnimate1: { x: 0, opacity: 1, transition: { duration: 1, delay: 2 } },

    ttbText1: {  y: -50, opacity: 0 },
    ttbTextAnimate1: { y: 0, opacity: 1, transition: { duration: 1, } },
    
    ttbTextDelayed1: {  y: -50, opacity: 0 },
    ttbTextAnimateDelayed1: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
}

const SolutionHero = ( {securityHeroTitle, securityHeroSubtitle}: SecurityHeroProps ) => {
    return (
            <section className="section sub-site-hero abt-hero-section">
              <span className="light-orange-box"></span>
        
              <Image src="/images/homepage/site-hero-blob.svg" alt="site-hero-blob" width={600} height={600} draggable={false} priority={true} className="site-hero-blob"></Image>
        
              <div className="container">
                <div className="hero-details-wrapper abt-hero-detail-wrapper">
                  <motion.div className="" variants={SecurityHeroAnimate} initial="ltrInitial1" animate="ltrAnimate1" viewport={{ once: true }}>
                    <Image src="/images/securitypage/SecurityHeroImage.webp" alt="about-hero" width={539} height={304} priority={true} className="about-hero-img"></Image>
                  </motion.div>
        
                  <div className="subpage-hero-details abt-hero-detail">
                    <motion.h1 className="text-md" variants={SecurityHeroAnimate} initial="ttbText1" animate="ttbTextAnimate1" viewport={{ once: true }}>{securityHeroTitle}</motion.h1>
                    {/* <h1 className="text-sb">Simplifying Global Clinical Trial Payments</h1> */}
        
                    <motion.p className="h6 text-rg" variants={SecurityHeroAnimate} initial="ttbTextDelayed1" animate="ttbTextAnimateDelayed1" viewport={{ once: true }}>{securityHeroSubtitle}</motion.p>
                  </div>
                </div>
              </div>
            </section>
    );
};

export default SolutionHero;
