import Image from 'next/image'
import React from 'react'

const SecurityAdvancedGovernance = () => {
    return (
        <>
            <div className="security-advan-governance section">
                <div className="container">
                    <div className="sec-advance-governance-main">
                        <div className="sec-advance-gover-head">
                            <h2 className=''>Advanced Governance for Modern Enterprises</h2>

                            <p className='h6 text-rg'>Drive transparency, accountability, and control with governance tools built to support strict compliance and resilient security across your organization.</p>
                        </div>

                        <div className="sec-gover-cards-wrapper">
                            <div className="secur-gover-card secur-audit-card sec-gover-card-1">
                                <Image src="/images/securitypage/AuditImage.webp" alt='audit-image' width={470} height={294} priority={false}></Image>

                                <div className="secur-card-head">
                                    <h4 className="h4 text-md">Audit Logs</h4>

                                    <p className='text-rg text-18 text-grey'>Capture comprehensive, immutable logs of all user actions, system activities, and visual workflows for full traceability.</p>
                                </div>
                            </div>

                            <div className="secur-gover-card secur-digital-card sec-gover-card-2">
                                <Image src="/images/securitypage/DigitalImage.webp" alt='audit-image' width={470} height={294} priority={false}></Image>

                                <div className="secur-card-head">
                                    <h4 className="h4 text-md">Digital Signatures</h4>

                                    <p className='text-rg text-18 text-grey'>Apply secure, legally recognized electronic signatures to critical documents and transactions to preserve integrity.</p>
                                </div>
                            </div>

                            <div className="secur-gover-card secur-access-card sec-gover-card-3">
                                <Image src="/images/securitypage/AccessReviewImage.webp" alt='audit-image' width={470} height={294} priority={false}></Image>

                                <div className="secur-card-head">
                                    <h4 className="h4 text-md">Access Reviews & SoD Alerts</h4>

                                    <p className='text-rg text-18 text-grey'>Run periodic access reviews and enforce Segregation of Duties policies, with alerts and audit trails for potential conflicts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityAdvancedGovernance