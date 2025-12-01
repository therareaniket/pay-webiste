import Image from "next/image";

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function BlogDetailPage() {
    return (
        <>
            <div className="container container-sm">
                <div className="blog-detail-breadcrumb">
                    <Breadcrumb className="mb-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink href="/BlogListing">Blogs</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>The Future of Digital Payments: Trends Driving Secure, Seamless, and Smarter Solutions</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="blog-detail-heading">
                    <span className="blog-text-heading-tag site-radius-20 link-padding text-14 text-rg">Digital Payments</span>
                    <h1 className="h3 text-md">The Future of Digital Payments: Trends Driving Secure, Seamless, and Smarter Solutions</h1>
                    <p className="text-18 text-rg">Explore how payment gateways like Dhatupay are shaping the future of online transactions and why security is non-negotiable for businesses today. From advanced encryption protocols to seamless multi-portal integration, modern gateways are redefining convenience without compromising trust.</p>
                </div>

                <div className="blog-image-main">
                    <Image src="/images/bloglisting/blog-detail-image.png" alt="blog-image" width={1400} height={700} priority={false}></Image>

                    <div className="image-tag-wrapper">
                        <div className="blog-prsn-main">
                            <span className="">SS</span>
                            <div>
                                <p className="text-rg text-18 ">Siddharth Shah</p>
                                <p className="text-rg text-18">20 November 2025 </p>
                            </div>
                        </div>

                        <div className="blog-image-section-icons">
                            <span className="icon-facebook"></span>

                            <span className="icon-instagram"></span>

                            <span className="icon-twitter"></span>
                        </div>
                    </div>

                    <div className="blog-detail-qns section">
                        <div>
                            <h3 className="h6 text-md">What are the key trends shaping the future of digital payments?</h3>
                            <p className="text-rg text-18">The major trends include AI-powered fraud detection, blockchain for secure transactions, contactless and mobile payments, cross-border payment solutions, and embedded finance through API integrations.</p>
                        </div>

                        <div>
                            <h3 className="h6 text-md">Why is security non-negotiable in digital payments?</h3>
                            <p className="text-rg text-18">With increasing online transactions, businesses face risks like data breaches and fraud. Strong security measures such as encryption, tokenization, and compliance with global standards ensure trust and protect sensitive information.</p>
                        </div>

                        <div>
                            <h3 className="h6 text-md">How is AI transforming payment gateways?</h3>
                            <p className="text-rg text-18">AI helps detect fraudulent activities in real time, predicts transaction patterns, and enhances customer experience through more personalized payment solutions.</p>
                        </div>

                        <div>
                            <h3 className="h6 text-md">Digital Payment Introduces AI-Powered Fraud Detection for Safer Transactions</h3>
                            <p className="text-rg text-18">Digital Payment has launched an advanced AI-driven fraud detection system to enhance security and prevent unauthorized transactions. This innovation ensures real-time monitoring and protection for businesses and customers alike.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}