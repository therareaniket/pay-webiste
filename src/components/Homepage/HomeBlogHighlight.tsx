"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeBlogHighlight() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bloh-highlight-headings">
                        <h2>Knowledge Hub - Discover expert insights</h2>

                        <p>Stay updated on product innovations, and explore effective clinical trials strategies all in one place.</p>
                    </div>

                    <div className="home-blog-listing">
                        <Link href="/DigitalSignature-TheSecure-PaperlessWaytoSignDocuments" className="blog-full site-radius-20 overflow-hidden popout-card">
                            <Image src="/images/bloglisting/digital-signature.webp" alt="blog-future-of-digital-payments" width={918} height={459}></Image>

                            <div className="full-blog-info">
                                <span className="category-chip site-radius-20 text-14">Digital Signatures</span>

                                <div className="home-blog-content">
                                    <h3 className="h5 text-md">Digital Signature — What It Is & Why You Need It</h3>

                                    <p>Explore Digital Signature: using cryptographic techniques rather than handwritten ink. Briefly mention that many jurisdictions now legally recognize digital / electronic signatures if done under valid frameworks/standards.</p>

                                    <div className="blog-writer">
                                        <span>Smit Shah</span>

                                        <span>09 December 2025</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="blog-half-group ">
                            <Link href="/DigitalPayments-101" className="blog-half site-radius-20 popout-card">
                                <Image src="/images/bloglisting/digital-payments.webp" alt="" width={780} height={390}></Image>

                                <div className="half-blog-info">
                                    <span className="category-chip site-radius-20 text-14">Digital Payments</span>

                                    <h3 className="h5 text-md">Digital Payments — Understanding the Benefits</h3>

                                    <div className="blog-writer">
                                        <span>Smit Shah</span>

                                        <span>09 December 2025</span>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/Why-Clinical-Trial-Portals-Need-One-Stop-Payment-Platform" className="blog-half site-radius-20 popout-card">
                                <Image src="/images/bloglisting/payment-integration.webp" alt="" width={780} height={390}></Image>

                                <div className="half-blog-info">
                                    <span className="category-chip site-radius-20 text-14">Payment Integration</span>

                                    <h3 className="h5 text-md">One-Stop Payment Platform for Clinical Trials</h3>

                                    <div className="blog-writer">
                                        <span>Smit Shah</span>

                                        <span>09 December 2025</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
