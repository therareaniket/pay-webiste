import Image from 'next/image'
import React from 'react'

const SecurityRegulatory = () => {
    return (
        <>
            <section className="section-bottom">
                <div className="container">
                    <div className="secr-regulatory-main">
                        <div className="sec-regulatory-heading">
                            <h2 className='h3 text-md'>Built for Global Regulatory Excellence</h2>

                            <p className='h6 text-rg'>Our platform is designed to meet stringent international compliance frameworks, providing end-to-end protection for sensitive financial and clinical data. Every transaction is validated against regulatory benchmarks.</p>

                        </div>
                        <div className="sec-regulatory-wrapper">
                            <div className="sec-regulatory-left">
                                <div className='sec-regulatory-text-wrap'>
                                    <Image src="images/securitypage/check.svg" alt='' width={15} height={12} priority={false}></Image>

                                    <div className=''>
                                        <h5 className='h5 text-sb'>21 CFR Part 11 eSignatures</h5>

                                        <p className='text-18 text-rg'>Support electronic signatures that satisfy FDA requirements for authenticity and data integrity.</p>
                                    </div>

                                </div>

                                <div className='sec-regulatory-text-wrap'>
                                    <Image src="images/securitypage/check.svg" alt='' width={15} height={12} priority={false}></Image>

                                    <div className=''>
                                        <h5 className='h5 text-sb'>Immutable Audit Trails</h5>

                                        <p className='text-18 text-rg'>Preserve tamper‑proof records of every transaction and system event for full traceability.</p>
                                    </div>

                                </div>

                                <div className='sec-regulatory-text-wrap'>
                                    <Image src="images/securitypage/check.svg" alt='' width={15} height={12} priority={false}></Image>

                                    <div className=''>
                                        <h5 className='h5 text-sb'>Jurisdiction Packs (US, EU, India)</h5>

                                        <p className='text-18 text-rg'>Use pre‑configured compliance packs tailored to regional regulations and documentation needs.</p>
                                    </div>

                                </div>
                            </div>



                            <Image className='SecurityRegulatoryImage' src="/images/securitypage/SecurityRegulatoryImage.webp" alt='' width={748} height={548} priority></Image>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecurityRegulatory