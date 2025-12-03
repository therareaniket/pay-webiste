"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeTrust() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="trust-headings">
                        <h2>Compliance & Security You Can Trust</h2>

                        <p className="h6 text-rg">Built-in safeguards like immutable audit trails, digital signatures, and jurisdiction-specific compliance packs ensure complete transparency and authenticity.</p>
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
                                        <h3 className="h5">Immutable Audit Trails</h3>

                                        <p>Secure tamper-proof records of every clinical trial transaction ensure full transparency and regulatory compliance. DhatuPay&apos;s immutable audit trails create verifiable histories that meet healthcare standards effortlessly.</p>
                                    </div>

                                    <span className="trust-image-scalaton h4 text-rg site-radius-20"></span>
                                </div>
                            </TabsContent>

                            <TabsContent value="security">
                                <div className="trust-tab-content">
                                    <div className="trust-info">
                                        <h3 className="h5">Digital Signatures</h3>

                                        <p>Secure, legally recognized digital signatures ensure document authenticity, prevent fraud, and guarantee global regulatory compliance.</p>
                                    </div>

                                    <span className="trust-image-scalaton h4 text-rg site-radius-20"></span>
                                </div>
                            </TabsContent>

                            <TabsContent value="compliance">
                                <div className="trust-tab-content">
                                    <div className="trust-info">
                                        <h3 className="h5">Jurisdiction Packs</h3>

                                        <p>Pre-configured packs for US, EU, and India simplify local laws, tax norms, and security—enabling confident multi-market operations.</p>
                                    </div>

                                    <span className="trust-image-scalaton h4 text-rg site-radius-20"></span>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>
            </section>
        </>
    );
}