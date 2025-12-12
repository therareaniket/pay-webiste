"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";

type HomeTrustProps = {
    securityTrustTitle: string;
    securityTrustSubtitle: string;
    trustList: {
    	integrityTitle: string;
    	integritySubtitle: string;
    	securityTitle: string;
    	securitySubtitle: string;
    	complianceTitle: string;
    	complianceSubtitle: string;
    }
};

export default function HomeTrust({securityTrustTitle, securityTrustSubtitle, trustList}: HomeTrustProps ) {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="trust-headings">
                        <h2>{securityTrustTitle}</h2>

                        <p className="h6 text-rg">{securityTrustSubtitle}</p>
                    </div>

                    <div className="trust-tabs">
                        <Tabs defaultValue="integrity">
                            <TabsList className="trust-tabs-list">
                                <TabsTrigger value="integrity" className="trust-tab-trigger text-20 text-md">Integrity</TabsTrigger>
                                <TabsTrigger value="security" className="trust-tab-trigger text-20 text-md">Security</TabsTrigger>
                                <TabsTrigger value="compliance" className="trust-tab-trigger text-20 text-md">Compliance</TabsTrigger>
                            </TabsList>

                            <span className="tab-line-seprator"></span>

                            <TabsContent value="integrity">
                                <div className="trust-tab-content">
                                    <div className="trust-info">
                                        <h3 className="h5">{trustList.integrityTitle}</h3>

                                        <p>{trustList.integritySubtitle}</p>
                                    </div>

                                    <Image src="/images/homepage/trust-integrity.webp" alt="trust-integrity" width={2080} height={1200} className="trust-image-scalaton site-radius-10"></Image>
                                </div>
                            </TabsContent>

                            <TabsContent value="security">
                                <div className="trust-tab-content">
                                    <div className="trust-info">
                                        <h3 className="h5">{trustList.securityTitle}</h3>

                                        <p>{trustList.securitySubtitle}</p>
                                    </div>

                                    {/* <span className="trust-image-scalaton h4 text-rg site-radius-20"></span> */}
                                    <Image src="/images/homepage/trust-security.webp" alt="trust-integrity" width={2080} height={1200} className="trust-image-scalaton site-radius-10"></Image>
                                </div>
                            </TabsContent>

                            <TabsContent value="compliance">
                                <div className="trust-tab-content">
                                    <div className="trust-info">
                                        <h3 className="h5">{trustList.complianceTitle}</h3>

                                        <p>{trustList.complianceSubtitle}</p>
                                    </div>

                                    {/* <span className="trust-image-scalaton h4 text-rg site-radius-20"></span> */}
                                    <Image src="/images/homepage/trust-compliance.webp" alt="trust-integrity" width={2080} height={1200} className="trust-image-scalaton site-radius-10"></Image>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>
            </section>
        </>
    );
}