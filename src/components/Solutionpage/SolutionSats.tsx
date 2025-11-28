"use client"

import Image from "next/image";

export default function SolutionStats() {
    return (
        <>
            <section className="section solution-stats-main">
                <div className="container">
                    <div className="solution-stats-text">
                        <h2 className="h3 text-md">Connected payments. Complete control. Seamless payouts.</h2>

                        <p className="h6 text-rg">Dhatu Pay simplifies complex payment workflows for Sponsors, CROs, Sites, Vendors, and Participants with one integrated platform that unifies every payment process.</p>
                    </div>

                    <div className="sol-stats-list">
                        <Image className="soln-stats-img" src="/images/solutionpage/Sol-stats-img.webp" alt="sol-stats-img" width={798} height={357} priority={false}></Image>

                        <div className="sol-stats-list-desc">
                            <p className="text-md h5">Includes</p>

                            <ul>
                                <p className="sol-tick-desc"><span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12}></Image></span> <li className="text-rg text-18">Multi-entity integration for seamless collaboration</li></p>
                                <p className="sol-tick-desc"><span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12}></Image></span> <li className="text-rg text-18">Global compliance with regulatory and financial standards</li></p>
                                <p className="sol-tick-desc"><span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12}></Image></span> <li className="text-rg text-18">Automated payment workflows for Sponsors, CROs, Sites, and Vendors</li></p>
                                <p className="sol-tick-desc"><span><Image src="/images/solutionpage/soln-stats-tick.svg" alt="" width={15} height={12}></Image></span> <li className="text-rg text-18">Fast participant reimbursements for travel and stipends</li></p>
                            </ul>
                        </div>
                    </div>

                    <div className="sol-stats-cards">
                        <div className="sol-stats-card-1">
                            <div className="stats-cards-1 soln-stats-cards">
                                <h4 className="h2 text-sb">30–50%</h4>

                                <p className="text-grey h6 text-md">Faster cycle times</p>
                            </div>

                            <div className="stats-cards-2 soln-stats-cards">
                                <h4 className="h2 text-sb">60s</h4>

                                <p className="h6 text-md">Total Payout Initiation</p>
                            </div>
                        </div>

                        <div className="sol-stats-card-2">
                            <div className="stats-cards-3 soln-stats-cards">
                                <h4 className="h2 text-sb"> 99%+</h4>

                                <p className="h6 text-md">Payout Success</p>
                            </div>

                            <div className="stats-cards-4 soln-stats-cards">
                                <h4 className="h2 text-sb">180+</h4>

                                <p className="text-grey h6 text-md">Integration with CTMS</p>
                            </div>
                        </div>

                        <div className="sol-stats-scroll-wrapper">
                            <div className="scroll-track">
                                <div className="stats-cards-1 soln-stats-cards">
                                    <h4 className="h2 text-sb">30–50%</h4>
                                    <p className="text-grey h6 text-md">Faster cycle times</p>
                                </div>

                                <div className="stats-cards-2 soln-stats-cards">
                                    <h4 className="h2 text-sb">60s</h4>
                                    <p className="h6 text-md">Total Payout Initiation</p>
                                </div>

                                <div className="stats-cards-4 soln-stats-cards">
                                    <h4 className="h2 text-sb">180+</h4>
                                    <p className="text-grey h6 text-md">Integration with CTMS</p>
                                </div>

                                <div className="stats-cards-3 soln-stats-cards">
                                    <h4 className="h2 text-sb"> 99%+</h4>
                                    <p className="h6 text-md">Payout Success</p>
                                </div>


                            </div>

                            <div className="scroll-track">
                                <div className="stats-cards-1 soln-stats-cards">
                                    <h4 className="h2 text-sb">30–50%</h4>
                                    <p className="text-grey h6 text-md">Faster cycle times</p>
                                </div>

                                <div className="stats-cards-2 soln-stats-cards">
                                    <h4 className="h2 text-sb">60s</h4>
                                    <p className="h6 text-md">Total Payout Initiation</p>
                                </div>

                                <div className="stats-cards-4 soln-stats-cards">
                                    <h4 className="h2 text-sb">180+</h4>
                                    <p className="text-grey h6 text-md">Integration with CTMS</p>
                                </div>

                                <div className="stats-cards-3 soln-stats-cards">
                                    <h4 className="h2 text-sb"> 99%+</h4>
                                    <p className="h6 text-md">Payout Success</p>
                                </div>


                            </div>

                        </div>

                        <div className="sol-stats-card-3">
                            <div className="stats-cards-5">
                                <div className="soln-stats-text-wrap" style={{ textAlign: 'center' }}>
                                    <h4 className="h2 text-sb">(US/EU/IN)</h4>
                                    <p className="h6 text-md">Global compliance</p>
                                </div>
                                <p className="h6 text-rg">Included in jurisdiction packs to ensure region-specific compliance, tax handling, and also regulatory alignment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}