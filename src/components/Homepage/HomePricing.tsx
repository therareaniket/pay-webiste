"use client"

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PricingProps = {
    pricingTitle: string;
    pricingSubtitle: string;
    planDetails: {
    	standardInclude1: string;
    	standardInclude2: string;
    	standardInclude3: string;
    	standardInclude4: string;
    	standardInclude5: string;

    	enterpriseInclude1: string;
    	enterpriseInclude2: string;
    	enterpriseInclude3: string;
    	enterpriseInclude4: string;
    	enterpriseInclude5: string;
    }
};

export default function Pricing({ pricingTitle, pricingSubtitle, planDetails }: PricingProps ) {
    return (
        <>
            <section className="section pricing">
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="pricing-left-pillar site-radius-20">
                            <div className="pillar-details">
                                <h3><span className="text-black">Save time with</span> DhatuPay.</h3>

                                <p>Manage budgets, automate payouts, and ensure compliance—all in one platform. Choose our Standard plan or upgrade to Pro for advanced features and global support.</p>

                                <p>Enjoy a 14-day free trial of Pro, then select the plan that fits your needs best.</p>
                            </div>

                            <Image src="/images/homepage/pricing-pillar-img.webp" alt="pricing-pillar-img" width={432} height={327} priority={false}></Image>
                        </div>

                        <div className="pricing-plan-details">
                            <div className="pricing-headings">
                                <h2>{pricingTitle}</h2>

                                <p className="h6 text-rg">{pricingSubtitle}</p>
                            </div>

                            <div className="plan-descrptn">
                                <div className="plan-item standard-plan site-radius-20 bg-red-500" style={{ backgroundColor: "var(--light-grey)" }}>
                                    <div className="plan-price">
                                        <p className="h4 text-sb">Standard</p>

                                        <p className="h4 text-sb">$49<span className="text-18 text-rg">per user/month</span></p>
                                    </div>

                                    <div className="plan-includes">
                                        <p className="h5 text-rg">Includes</p>

                                        <ul>
                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude1}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude2}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude3}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude4}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude5}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <Link href="/ComingSoon" title="Start with Standard" className="plans-link text-18 text-md site-radius-50">Start Now</Link>
                                </div>

                                <div className="plan-item enterprise-plan site-radius-20 bg-red-500" style={{ backgroundColor: "var(--hero-bg)", color: "var(--white)" }}>
                                    <div className="plan-price">
                                        <p className="h4 text-sb">Enterprise</p>

                                        <p className="h4 text-sb">$299<span className="text-18 text-rg">per user/month</span></p>
                                    </div>

                                    <div className="plan-includes">
                                        <p className="h5 text-rg">Includes</p>

                                        <ul>
                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude1}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude2}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude3}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude4}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude5}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <Link href="/ComingSoon" title="Start with Enterprise" className="plans-link white-bg text-18 text-md site-radius-50">Start Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="plan-descrptn-tabs">
                        <Tabs defaultValue="standard" className="pricing-mob-tabs">
                            <TabsList className="plan-tabs-list">
                                <TabsTrigger value="standard" className="plan-tab-trigger text-20 text-md">Standard</TabsTrigger>
                                <TabsTrigger value="enterprise" className="plan-tab-trigger text-20 text-md">Enterprise</TabsTrigger>
                            </TabsList>

                            <span className="tab-line-seprator"></span>

                            <TabsContent value="standard">
                                <div className="plan-item standard-plan site-radius-20 bg-red-500" style={{ backgroundColor: "var(--light-grey)" }}>
                                    <div className="plan-price">
                                        <p className="h4 text-sb">Standard</p>

                                        <p className="h4 text-sb">$49<span className="text-18 text-rg">per user/month</span></p>
                                    </div>

                                    <div className="plan-includes">
                                        <p className="h5 text-rg">Includes</p>

                                        <ul>
                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude1}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude2}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude3}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude4}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.standardInclude5}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <Link href="/ComingSoon" title="Start with Standard" className="plans-link text-18 text-md site-radius-50">Start Now</Link>
                                </div>
                            </TabsContent>

                            <TabsContent value="enterprise">
                                <div className="plan-item enterprise-plan site-radius-20 bg-red-500" style={{ backgroundColor: "var(--hero-bg)", color: "var(--white)" }}>
                                    <div className="plan-price">
                                        <p className="h4 text-sb">Enterprise</p>

                                        <p className="h4 text-sb">$299<span className="text-18 text-rg">per user/month</span></p>
                                    </div>

                                    <div className="plan-includes">
                                        <p className="h5 text-rg">Includes</p>

                                        <ul>
                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude1}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude2}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude3}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude4}</span>
                                            </li>

                                            <li>
                                                <Image src="/images/homepage/pricing-includes-check-white.svg" alt="pricing-includes-check" width={15} height={11}></Image>

                                                <span className="text-18">{planDetails.enterpriseInclude5}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <Link href="/ComingSoon" title="Start with Enterprise" className="plans-link white-bg text-18 text-md site-radius-50">Start Now</Link>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}