"use client"
import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type AboutLifeCycleProps = {
    introTitle: string;
    introSubtitle: string;

    lifecycleTitle: string;
    lifecycleSubtitle: string;
}


export default function AboutLifeCycle( { introTitle, introSubtitle, lifecycleTitle, lifecycleSubtitle }: AboutLifeCycleProps ) {

    const pathD = "M10.5001 264.998L307.675 264.998C308.885 264.998 310.088 264.815 311.243 264.456L476.5 212.998L581.501 180.498L865.5 81.498L1076.65 11.1141C1077.88 10.7062 1079.16 10.4983 1080.45 10.4983L1404 10.4983";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });

    const containerVariants: Variants  = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 1, delayChildren: 1 }
        }
    };

    const pointVariants: Variants  = {
        hidden: { y: '100%', opacity: 0 },
        visible: { 
            y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const mobileLineAnimation: Variants = {
        initialLine: { height: '0%', },
        animatedLine: { height: '100%', transition: { delay: 1, duration: 5, ease: "easeOut" } }
    }

    const mobilePointsAnimation = (index: number): Variants => ({
        initialPoint: { x: '-20px', opacity: 0 },
        animatedPoint: { x: "calc(0px - 5px)", opacity: 1, transition: { duration: 1, ease: "easeOut", delay: index * 1 } }
    });


    return (
        <>
            <section className="section meet-dhatupay">
                <div className="container">
                    <div className="meet-dp-headings">
                        <h2>{introTitle}</h2>

                        <p className="h6 text-rg">{introSubtitle}</p>
                    </div>
                </div>
            </section>

            <section className="section life-cycle" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="life-cycle-headings">
                        <h2>{lifecycleTitle}</h2>

                        <p className="h6 text-rg">{lifecycleSubtitle}</p>
                    </div>

                    {/* <motion.div ref={ref} className="life-cycle-timeline"  initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
                        <div className="life-cycle-list-wrapper">
                            <svg ref={ref} width={1415} height={276} viewBox="0 0 1415 276" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="purpleStroke" x1="10.2969" y1="138.849" x2="1404.2" y2="136.605" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.22" stopColor="#00092E" />
                                        <stop offset="1" stopColor="#011e80" />
                                    </linearGradient>
                                </defs>

                                <path d={pathD} stroke="var(--light-grey)" strokeWidth={20} strokeLinecap="round" fill="none" />

                                <g mask="url(#strokeMask)">
                                    <motion.path d={pathD} stroke="url(#purpleStroke)" strokeWidth={20} strokeLinecap="round" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: isInView ? 1 : 0 }} transition={{ duration: 5, ease: "easeOut", delay: 1 }} />
                                </g>
                            </svg>

                            <div className="point point-1">
                                <div className="lc-info-block lc-block-1">
                                    <h5 className="text-md">Contract</h5>

                                    <p className="text-18">AI-assisted term extraction ensures accurate interpretation of contract clauses, reducing manual effort and compliance risks.</p>
                                </div>
                            </div>

                            <div className="point point-2">
                                <div className="lc-info-block lc-block-2">
                                    <h5 className="text-md">Invoice</h5>

                                    <p className="text-18">Optical Character Recognition (OCR) combined with e-Invoicing standards like PEPPOL and GSTN streamlines invoice processing and guarantees compliance.</p>
                                </div>
                            </div>

                            <div className="point point-3">
                                <div className="lc-info-block lc-block-3">
                                    <h5 className="text-md">Disbursement</h5>

                                    <p className="text-18">Supports multiple payment channels including ACH, SEPA, UPI, and SWIFT, enabling fast, secure, and global disbursements.</p>
                                </div>
                            </div>

                            <div className="point point-4">
                                <div className="lc-info-block lc-block-4">
                                    <h5 className="text-md">Reconcile</h5>

                                    <p className="text-18">Leverages bank file matching and General Ledger tie-outs for accurate reconciliation, reducing errors and enhancing financial integrity.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div> */}

                    <motion.div ref={ref} className="life-cycle-timeline" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} >
                        <div className="life-cycle-list-wrapper">
                            <svg width={1415} height={276} viewBox="0 0 1415 276" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="purpleStroke" x1="10.2969" y1="138.849" x2="1404.2" y2="136.605" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.22" stopColor="#00092E" />
                                        <stop offset="1" stopColor="#011e80" />
                                    </linearGradient>
                                </defs>

                                <path d={pathD} stroke="var(--light-grey)" strokeWidth={20} strokeLinecap="round" fill="none" />

                                <motion.path
                                    d={pathD}
                                    stroke="url(#purpleStroke)"
                                    strokeWidth={20}
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: isInView ? 1 : 0 }}
                                    transition={{ duration: 7, ease: "easeOut" }}
                                />
                            </svg>

                            <motion.div className="point point-1" variants={pointVariants}>
                                <div className="lc-info-block lc-block-1">
                                    <h5 className="text-md">Contract</h5>
                                    <p className="text-18">AI-assisted term extraction ensures accurate interpretation of contract clauses, reducing manual effort and compliance risks.</p>
                                </div>
                            </motion.div>

                            <motion.div className="point point-2" variants={pointVariants}>
                                <div className="lc-info-block lc-block-2">
                                    <h5 className="text-md">Invoice</h5>
                                    <p className="text-18">Optical Character Recognition (OCR) combined with e-Invoicing standards like PEPPOL and GSTN streamlines invoice processing and guarantees compliance.</p>
                                </div>
                            </motion.div>

                            <motion.div className="point point-3" variants={pointVariants}>
                                <div className="lc-info-block lc-block-3">
                                    <h5 className="text-md">Disbursement</h5>
                                    <p className="text-18">Supports multiple payment channels including ACH, SEPA, UPI, and SWIFT, enabling fast, secure, and global disbursements.</p>
                                </div>
                            </motion.div>

                            <motion.div className="point point-4" variants={pointVariants}>
                                <div className="lc-info-block lc-block-4">
                                    <h5 className="text-md">Reconcile</h5>
                                    <p className="text-18">Leverages bank file matching and General Ledger tie-outs for accurate reconciliation, reducing errors and enhancing financial integrity.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="life-cycle-timeline-mob">
                        <div className="lc-mob-centerline site-radius-20">
                            <motion.div className="lc-mob-animated-line site-radius-20 absolute" variants={mobileLineAnimation} initial="initialLine" whileInView="animatedLine" viewport={{ once: true, amount: 0.8 }}></motion.div>

                            <motion.div className="center-point" variants={mobilePointsAnimation(1.5)} initial="initialPoint" whileInView="animatedPoint" viewport={{ once: true }}>
                                <div className="lc-info-block lc-block-1">
                                    <h5 className="text-md">Contract</h5>

                                    <p className="text-18">AI-assisted term extraction ensures accurate interpretation of contract clauses, reducing manual effort and compliance risks.</p>
                                </div>
                            </motion.div>

                            <motion.div className="center-point" variants={mobilePointsAnimation(2.5)} initial="initialPoint" whileInView="animatedPoint" viewport={{ once: true }}>
                                <div className="lc-info-block lc-block-2">
                                    <h5 className="text-md">Invoice</h5>

                                    <p className="text-18">Optical Character Recognition (OCR) combined with e-Invoicing standards like PEPPOL and GSTN streamlines invoice processing and guarantees compliance.</p>
                                </div>
                            </motion.div>

                            <motion.div className="center-point" variants={mobilePointsAnimation(3)} initial="initialPoint" whileInView="animatedPoint" viewport={{ once: true }}>
                                <div className="lc-info-block lc-block-3">
                                    <h5 className="text-md">Disbursement</h5>

                                    <p className="text-18">Supports multiple payment channels including ACH, SEPA, UPI, and SWIFT, enabling fast, secure, and global disbursements.</p>
                                </div>
                            </motion.div>
                            
                            <motion.div className="center-point" variants={mobilePointsAnimation(4)} initial="initialPoint" whileInView="animatedPoint" viewport={{ once: true }}>
                                <div className="lc-info-block lc-block-4">
                                    <h5 className="text-md">Reconcile</h5>

                                    <p className="text-18">Leverages bank file matching and General Ledger tie-outs for accurate reconciliation, reducing errors and enhancing financial integrity.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
