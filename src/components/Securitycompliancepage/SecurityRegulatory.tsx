'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type SecurityRegulatoryProps = {
    globalExcellenceTitle: string;
    globalExcellenceSubtitle: string;
    esignaturesDetails: string;
    auditTrailsDetails: string;
    jurisdictionPacksDetails: string;
}

const SecurityRegulatory = ( {globalExcellenceTitle, globalExcellenceSubtitle, esignaturesDetails, auditTrailsDetails, jurisdictionPacksDetails}: SecurityRegulatoryProps ) => {
    // Parent container variant for stagger
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8, // delay between each child
            }
        }
    }

    // Child variants
    const textVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    }

    const items = [
        {
            title: '21 CFR Part 11 eSignatures',
            text: esignaturesDetails
        },
        {
            title: 'Immutable Audit Trails',
            text: auditTrailsDetails
        },
        {
            title: 'Jurisdiction Packs (US, EU, India)',
            text: jurisdictionPacksDetails
        }
    ]

    return (
        <section className="section-bottom">
            <div className="container">
                <div className="secr-regulatory-main">
                    <div className="sec-regulatory-heading">
                        <h2 className=''>{globalExcellenceTitle}</h2>
                        <p className='h6 text-rg'>{globalExcellenceSubtitle}</p>
                    </div>

                    <div className="sec-regulatory-wrapper">
                        {/* Parent motion div for stagger */}
                        <motion.div
                            className="sec-regulatory-left"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className='sec-regulatory-text-wrap'
                                    variants={textVariants} // child variant
                                >
                                    <Image src="/images/securitypage/check.svg" alt='' width={15} height={12} />
                                    <div>
                                        <h5 className='h5 text-sb'>{item.title}</h5>
                                        <p className='text-18 text-rg'>{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <Image
                            className='SecurityRegulatoryImage'
                            src="/images/securitypage/SecurityRegulatoryImage.webp"
                            alt=''
                            width={748}
                            height={548}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecurityRegulatory
