"use client"

import Image from "next/image";

export default function SolutionStats() {
    return (
        <>
            <section className="section solution-stats-main">
                <div className="container">
                    <div className="solution-stats-text">
                        <h2 className="h3 text-md">Connected Payments , Complete Control, Seamless Payments.</h2>

                        <p className="h6 text-rg">Pay is designed to simplify complex payment workflows for Sponsors, CROs, Sites, Vendors, and Participants. An integrated solution designed to unify payment processes.</p>
                    </div>

                    <div className="sol-stats-list">
                        <Image src="/images/solutionpage/Sol-stats-img.webp" alt="sol-stats-img" width={798} height={357} priority={false}></Image>

                        <div className="sol-stats-list-desc">
                            <p className="text-md h5">Includes</p>

                            <ul>
                                <li className="text-rg text-18">Multi-entity integration for seamless collaboration</li>
                                <li className="text-rg text-18">Global compliance with regulatory and financial standards</li>
                                <li className="text-rg text-18">Automated payment workflows for Sponsors, CROs, Sites, Vendors</li>
                                <li className="text-rg text-18">Quick participant reimbursements for travel and stipends</li>
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

                        <div className="sol-stats-card-3">
                            <div className="stats-cards-5">
                                <div className="soln-stats-text-wrap">
                                <h4 className="h2 text-sb">(US/EU/IN)</h4>
                                <p className="h6 text-md">Global compliance</p>
                                </div>
                                <p className="h6 text-rg">Included in jurisdiction packs to ensure region-specific compliance, tax handling, and also regulatory alignment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}