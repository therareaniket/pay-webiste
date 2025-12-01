"use client";

import Image from "next/image";

export default function HomeBlogHighlight() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="bloh-highlight-headings">
                        <h2>Knowledge Hub - Discover expert insights</h2>

                        <p>Stay updated on product innovations, and explore effective clinical trial strategies all in one place.</p>
                    </div>

                    <div className="home-blog-listing">
                        <div className="blog-full site-radius-20 overflow-hidden">
                            <Image src="/images/homepage/blog-future-of-digital-payments-webp.webp" alt="blog-future-of-digital-payments" width={918} height={459}></Image>

                            <div className="full-blog-info">
                                <span className="category-chip site-radius-20 text-14">Business Benefits</span>

                                <div className="home-blog-content">
                                    <h3 className="h5 text-md">The Future of Digital Payments</h3>

                                    <p>Explore how payment gateways like Dhatupay are shaping the future of online transactions and why security is non-negotiable for businesses today. From advanced encryption protocols to seamless multi-portal integration, modern gateways are redefining convenience without compromising trust.</p>

                                    <div className="blog-writer">
                                        <span>Siddharth Shah</span>

                                        <span>20 November 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-half-group">
                            <div className="blog-half site-radius-20 ">
                                <Image src="/images/homepage/blog-integrate-portal-in-easy-steps-webp.webp" alt="" width={780} height={390}></Image>

                                <div className="half-blog-info">
                                    <span className="category-chip site-radius-20 text-14">Payment Integration</span>

                                    <h3 className="h5 text-md">With DhatuPay Integrate Portal in 5 Easy Steps</h3>

                                    <div className="blog-writer">
                                        <span>Dev Shah</span>

                                        <span>19 November 2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-half site-radius-20 ">
                                <Image src="/images/homepage/blog-benefits-of-using-dhatupay-webp.webp" alt="" width={780} height={390}></Image>

                                <div className="half-blog-info">
                                    <span className="category-chip site-radius-20 text-14">Business Benefits</span>

                                    <h3 className="h5 text-md">7 Benefits of Using Dhatupay for Your Business</h3>

                                    <div className="blog-writer">
                                        <span>Harsh Nayak</span>

                                        <span>19 November 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
