"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Image from "next/image";

type IntegrationProps = {
    integrationsTitle: string;
    integrationsSubtitle: string;
}

export default function AboutIntegration( {integrationsTitle, integrationsSubtitle}: IntegrationProps ) {
    return (
        <>
            <section className="section integration" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="integration-headings">
                        <h2>{integrationsTitle}</h2>

                        <p className="h6 text-rg">{integrationsSubtitle}</p>
                    </div>

                    <div className="trust-tabs integration-tabs">
                        <Tabs defaultValue="integration">
                            <TabsList className="trust-tabs-list integration-tabs-list">
                                <TabsTrigger value="integration" className="trust-tab-trigger integration-tab-trigger text-20 text-md">Integration Layer</TabsTrigger>
                                <TabsTrigger value="coreEngines" className="trust-tab-trigger integration-tab-trigger text-20 text-md">Core Engines</TabsTrigger>
                                <TabsTrigger value="experience" className="trust-tab-trigger integration-tab-trigger text-20 text-md">Experience Layer</TabsTrigger>
                                <TabsTrigger value="analyticsInsights" className="trust-tab-trigger integration-tab-trigger text-20 text-md"> Analytics & Insights Layer</TabsTrigger>
                            </TabsList>

                            <span className="tab-line-seprator"></span>

                            <TabsContent value="integration">
                                <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Seamless Connectivity</h3>

                                            <p>Integrates with CTMS, ERP, banking networks, and identity providers for smooth data flow across systems.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Instant Sync</h3>

                                            <p>Delivers real-time updates to systems, eliminating delays and maintaining workflow continuity.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/integration-layer-webp.webp" alt="integration-layer" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Secure Authentication</h3>

                                            <p>Enforces robust identity management and access controls for compliant, protected operations.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Interoperability</h3>

                                            <p>Enables seamless communication between platforms, cutting manual work and boosting efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="coreEngines">
                                <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Accrual Engine</h3>

                                            <p>Automates subject visit tracking and accrual calculations for precise budgeting and forecasting.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Payment Engine</h3>

                                            <p>Manages payment workflows with real-time processing and compliance validation for stakeholders.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/core-engine-webp.webp" alt="core-engine" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Compliance Engine</h3>

                                            <p>Enforces regulatory standards and audit trails for secure, transparent operations.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Scalability Engine</h3>

                                            <p>Delivers optimized performance to handle high-volume transactions without compromise.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="experience">
                                <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Portal UI</h3>

                                            <p>Intuitive, role-based interface for Sponsors, CROs, Sites, and Vendors to manage workflows effortlessly.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">APIs</h3>

                                            <p>Seamless integration with CTMS, ERP, and banking systems for real-time data exchange.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/experience-webp.webp" alt="experience" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Automation Agents</h3>

                                            <p>Automates repetitive tasks, approvals, and notifications to minimize manual work.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Personalization</h3>

                                            <p>Custom dashboards and experiences tailored to roles, preferences, and regional needs</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="analyticsInsights">
                                <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Real-Time Dashboards</h3>

                                            <p>Instant visibility into payment workflows, accruals, and compliance metrics to drive informed decisions.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Predictive Analytics</h3>

                                            <p>Leverage historical and real-time data to forecast budgets, timelines, and resource needs accurately.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/analytics-webp.webp" alt="analytics" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Compliance Monitoring</h3>

                                            <p>Track regulatory adherence across jurisdictions with automated alerts and audit-ready reports.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Performance Metrics</h3>

                                            <p>Measure site efficiency, payment turnaround, and KPIs to continuously optimize operations.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="integration-accord">
                        <Accordion type="single" defaultValue="item-1" collapsible>
                            <AccordionItem value="item-1" className="integr-item">
                                <AccordionTrigger className="integ-trigger"><h3 className="h4 text-md">Integration Layer</h3></AccordionTrigger>
                                
                                <AccordionContent className="integ-cont">
                                    <div className="integration-tab-content">
                                        <div className="content-list">
                                            <div className="content-item">
                                                <h3 className="h5 text-md">Seamless Connectivity</h3>

                                                <p>Integrates with CTMS, ERP, banking networks, and identity providers for smooth data flow across systems.</p>
                                            </div>

                                            <div className="content-item">
                                                <h3 className="h5 text-md">Instant Sync</h3>

                                                <p>Delivers real-time updates to systems, eliminating delays and maintaining workflow continuity.</p>
                                            </div>
                                        </div>

                                        <Image src="/images/aboutpage/integration-layer-webp.webp" alt="integration-layer" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                        <div className="content-list">
                                            <div className="content-item">
                                                <h3 className="h5 text-md">Secure Authentication</h3>

                                                <p>Enforces robust identity management and access controls for compliant, protected operations.</p>
                                            </div>

                                            <div className="content-item">
                                                <h3 className="h5 text-md">Interoperability</h3>

                                                <p>Enables seamless communication between platforms, cutting manual work and boosting efficiency.</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="integr-item">
                                <AccordionTrigger className="integ-trigger"><h3 className="h4 text-md">Core Engines</h3></AccordionTrigger>
                                <AccordionContent className="integ-cont">
                                    <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Accrual Engine</h3>

                                            <p>Automates subject visit tracking and accrual calculations for precise budgeting and forecasting.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Payment Engine</h3>

                                            <p>Manages payment workflows with real-time processing and compliance validation for stakeholders.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/core-engine-webp.webp" alt="core-engine" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Compliance Engine</h3>

                                            <p>Enforces regulatory standards and audit trails for secure, transparent operations.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Scalability Engine</h3>

                                            <p>Delivers optimized performance to handle high-volume transactions without compromise.</p>
                                        </div>
                                    </div>
                                </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="integr-item">
                                <AccordionTrigger className="integ-trigger"><h3 className="h4 text-md">Experience Layer</h3></AccordionTrigger>
                                <AccordionContent className="integ-cont">
                                    <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Portal UI</h3>

                                            <p>Intuitive, role-based interface for Sponsors, CROs, Sites, and Vendors to manage workflows effortlessly.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">APIs</h3>

                                            <p>Seamless integration with CTMS, ERP, and banking systems for real-time data exchange.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/experience-webp.webp" alt="experience" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Automation Agents</h3>

                                            <p>Automates repetitive tasks, approvals, and notifications to minimize manual work.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Personalization</h3>

                                            <p>Custom dashboards and experiences tailored to roles, preferences, and regional needs</p>
                                        </div>
                                    </div>
                                </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="integr-item">
                                <AccordionTrigger className="integ-trigger"><h3 className="h4 text-md"> Analytics & Insights Layer</h3></AccordionTrigger>
                                <AccordionContent className="integ-cont">
                                    <div className="integration-tab-content">
                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Real-Time Dashboards</h3>

                                            <p>Instant visibility into payment workflows, accruals, and compliance metrics to drive informed decisions.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Predictive Analytics</h3>

                                            <p>Leverage historical and real-time data to forecast budgets, timelines, and resource needs accurately.</p>
                                        </div>
                                    </div>

                                    <Image src="/images/aboutpage/analytics-webp.webp" alt="analytics" width={601} height={386} className="site-radius-20" priority={true}></Image>

                                    <div className="content-list">
                                        <div className="content-item">
                                            <h3 className="h5 text-md">Compliance Monitoring</h3>

                                            <p>Track regulatory adherence across jurisdictions with automated alerts and audit-ready reports.</p>
                                        </div>

                                        <div className="content-item">
                                            <h3 className="h5 text-md">Performance Metrics</h3>

                                            <p>Measure site efficiency, payment turnaround, and KPIs to continuously optimize operations.</p>
                                        </div>
                                    </div>
                                </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>  
                </div>
            </section>
        </>
    );
}