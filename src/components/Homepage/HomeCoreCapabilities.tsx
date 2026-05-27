'use client'

import { useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

type CoreCapabilitiesProps = {
    coreCapabilitiesTitle: string;
    coreCapabilitiesSubtitle: string;
    coreCapabilitiesList:{
    	capabilitiesList1Title: string;
    	capabilitiesList1Subtitle: string;
    	capabilitiesList2Title: string;
    	capabilitiesList2Subtitle: string;
    	capabilitiesList3Title: string;
    	capabilitiesList3Subtitle: string;
    	capabilitiesList4Title: string;
    	capabilitiesList4Subtitle: string;
    }
};

export default function CoreCapabilities( { coreCapabilitiesTitle, coreCapabilitiesSubtitle, coreCapabilitiesList }: CoreCapabilitiesProps) {

    useEffect(() => {
        const verticalLines = document.querySelectorAll<HTMLElement>(".capablty-lists-divider");
        const horizontalLines = document.querySelectorAll<HTMLElement>(".capablty-divider");
        const textBlocks = document.querySelectorAll<HTMLElement>(".capablty-list");

        const animateHeight = (el: HTMLElement, toHeight: number, duration = 1000) => {
            let start: number | null = null;

            const animate = (timestamp: number) => {
                if (start === null) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                el.style.height = progress * toHeight + "px";
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        const animateWidth = (el: HTMLElement, toWidth: number, duration = 1000) => {
            let start: number | null = null;

            const animate = (timestamp: number) => {
                if (start === null) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                el.style.width = progress * toWidth + "px";
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        verticalLines.forEach((line) => {
                            const parent = line.parentElement as HTMLElement | null;
                            if (!parent) return;
                            const targetHeight = parent.clientHeight;
                            animateHeight(line, targetHeight);
                        });

                        horizontalLines.forEach((line) => {
                            const parent = line.parentElement as HTMLElement | null;
                            if (!parent) return;
                            const targetWidth = parent.clientWidth;
                            animateWidth(line, targetWidth);
                        });

                        const animationOrder = [
                            0, 
                            2, 
                            1, 
                            3  
                        ];

                        animationOrder.forEach((blockIndex, i) => {
                            const block = textBlocks[blockIndex];
                            if (!block) return;
                            block.classList.add("capability-animate");
                            block.style.animationDelay = `${i * 0.5}s`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector(".core-capabiblities");
        if (section) observer.observe(section);
    }, []);

    const homeCoreCapabilities = (typeof window !== "undefined" && window.innerWidth <= 767) ? {
        initialLTR1: { x: -40, opacity: 0 },
        animateLTR1: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 0 } },
        initialLTR2: { x: -40, opacity: 0 },
        animateLTR2: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.5 } },
        initialLTR3: { x: -40, opacity: 0 },
        animateLTR3: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 1 } },
        initialLTR4: { x: -40, opacity: 0 },
        animateLTR4: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 1.5 } },
    } : {
        initialLTR1: { x: -100, opacity: 0 },
        animateLTR1: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0 } },
        initialLTR2: { x: -100, opacity: 0 },
        animateLTR2: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } },
        initialLTR3: { x: 100, opacity: 0 },
        animateLTR3: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
        initialLTR4: { x: 100, opacity: 0 },
        animateLTR4: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
    }

    return (
        <section className="section core-capabiblities">
            <div className="container">
                <div className="capabiblity-wrapper">

                    <div className="core-capablty-headings">
                        <h2>{coreCapabilitiesTitle}</h2>
                        <p className="h6 text-rg">{coreCapabilitiesSubtitle}</p>
                    </div>

                    <div className="capablty-lists-wrapper">
                        {/* LEFT BLOCK */}
                        <div className="capablty-lists capablty-left-lists">
                            <motion.div className="capablty-list capablty-left-list" variants={homeCoreCapabilities} initial="initialLTR1" whileInView="animateLTR1" viewport={{ once: true, amount: 0.8 }}>
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-globe-coverage.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>{coreCapabilitiesList.capabilitiesList1Title}</h5>
                                    <p>{coreCapabilitiesList.capabilitiesList1Subtitle}</p>
                                </div>
                            </motion.div>

                            <span className="capablty-divider capability-gradient"></span>

                            <motion.div className="capablty-list capablty-left-list" variants={homeCoreCapabilities} initial="initialLTR2" whileInView="animateLTR2" viewport={{ once: true, amount: 0.8 }}>
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-ai-automation.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>{coreCapabilitiesList.capabilitiesList2Title}</h5>
                                    <p>{coreCapabilitiesList.capabilitiesList2Subtitle}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* VERTICAL DIVIDER */}
                        <span className="capablty-lists-divider capability-gradient"></span>

                        {/* RIGHT BLOCK */}
                        <div className="capablty-lists capablty-right-lists">
                            <motion.div className="capablty-list capablty-right-list" variants={homeCoreCapabilities} initial="initialLTR3" whileInView="animateLTR3" viewport={{ once: true, amount: 0.8 }}>
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-auto-payments.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>{coreCapabilitiesList.capabilitiesList3Title}</h5>
                                    <p>{coreCapabilitiesList.capabilitiesList3Subtitle}</p>
                                </div>
                            </motion.div>

                            <span className="capablty-divider capability-gradient"></span>

                            <motion.div className="capablty-list capablty-right-list" variants={homeCoreCapabilities} initial="initialLTR4" whileInView="animateLTR4" viewport={{ once: true, amount: 0.8 }}>
                                <div className="capablty-icon site-radius-10">
                                    <Image src="/images/homepage/icon-in-built-compliance.svg" width={32} height={32} alt="" />
                                </div>
                                <div className="list-details">
                                    <h5>{coreCapabilitiesList.capabilitiesList4Title}</h5>
                                    <p>{coreCapabilitiesList.capabilitiesList4Subtitle}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
