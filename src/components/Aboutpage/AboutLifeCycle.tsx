"use client"

export default function AboutLifeCycle() {

    const pathD = "M10.5001 264.998L307.675 264.998C308.885 264.998 310.088 264.815 311.243 264.456L476.5 212.998L581.501 180.498L865.5 81.498L1076.65 11.1141C1077.88 10.7062 1079.16 10.4983 1080.45 10.4983L1404 10.4983";

    return (
        <>
            <section className="section meet-dhatupay">
                <div className="container">
                    <div className="meet-dp-headings">
                        <h2>Meet DhatuPay: Your Digital Payment Partner</h2>

                        <p className="h6 text-rg">Transform how you run trials with expert insights, deep dives, and industry innovation focused on modern payment operations. Stay ahead with curated content on trial transformation, compliance excellence, and operational leadership tailored for life sciences.</p>
                    </div>
                </div>
            </section>

            <section className="section life-cycle" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="life-cycle-headings">
                        <h2>End-to-End Payment Lifecycle Intelligence</h2>

                        <p className="h6 text-rg">From contract through reconciliation, gain full transparency and intelligent control over every stage of the financial lifecycle for truly seamless payments.</p>
                    </div>

                    <div className="life-cycle-timeline">
                        <div className="life-cycle-list-wrapper">
                            <svg width={1415} height={276} viewBox="0 0 1415 276" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="purpleStroke" x1="10.2969" y1="138.849" x2="1404.2" y2="136.605" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.22" stopColor="#00092E" />
                                        <stop offset="1" stopColor="#011e80" />
                                    </linearGradient>

                                    <mask id="strokeMask">
                                        <path d={pathD} stroke="white" strokeWidth={20} strokeLinecap="round" fill="none" className="stroke-mask-path" />
                                    </mask>
                                </defs>

                                <path d={pathD} stroke="#F2F2F2" strokeWidth={20} strokeLinecap="round" fill="none" />

                                <g mask="url(#strokeMask)">
                                    <path d={pathD} stroke="url(#purpleStroke)" strokeWidth={20} strokeLinecap="round" fill="none" />
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
                    </div>

                    <div className="life-cycle-timeline-mob">
                        <div className="lc-mob-centerline site-radius-20">
                            <div className="lc-mob-animated-line site-radius-20 absolute"></div>

                            <div className="center-point">
                                <div className="lc-info-block lc-block-1">
                                    <h5 className="text-md">Contract</h5>

                                    <p className="text-18">AI-assisted term extraction ensures accurate interpretation of contract clauses, reducing manual effort and compliance risks.</p>
                                </div>
                            </div>

                            <div className="center-point">
                                <div className="lc-info-block lc-block-2">
                                    <h5 className="text-md">Invoice</h5>

                                    <p className="text-18">Optical Character Recognition (OCR) combined with e-Invoicing standards like PEPPOL and GSTN streamlines invoice processing and guarantees compliance.</p>
                                </div>
                            </div>

                            <div className="center-point">
                                <div className="lc-info-block lc-block-3">
                                    <h5 className="text-md">Disbursement</h5>

                                    <p className="text-18">Supports multiple payment channels including ACH, SEPA, UPI, and SWIFT, enabling fast, secure, and global disbursements.</p>
                                </div>
                            </div>
                            
                            <div className="center-point">
                                <div className="lc-info-block lc-block-4">
                                    <h5 className="text-md">Reconcile</h5>

                                    <p className="text-18">Leverages bank file matching and General Ledger tie-outs for accurate reconciliation, reducing errors and enhancing financial integrity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
