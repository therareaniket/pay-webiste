"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function AboutNextGenAccords() {
    return (
        <>
            <section className="next-gen-accords">
                <div className="container">
                    <div className="next-gen-headings">
                        <h2>Next-Gen Intelligence & Automation</h2>

                        <p className="h6 text-rg">Transform payment operations with predictive analytics, automated policy management, and simulation tools built to optimize accuracy, compliance, and speed.</p>
                    </div>

                    <div className="accordian-wrapper">
                        <div className="accordian-list">
                            <Accordion type="single" defaultValue="item-1" collapsible>
                                <AccordionItem value="item-1" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Agent Pay</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">Harness AI to make payment workflows smarter and more secure. Agent Pay applies advanced anomaly detection to identify irregularities before they become costly issues, and parses complex contracts to automatically extract key payment terms and details for seamless execution.</AccordionContent>
                                </AccordionItem>
                                
                                <AccordionItem value="item-2" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Policy Engine</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">Deploy an intelligent policy engine that encodes complex payment policies and rules. It reviews every transaction instantly against contract, budget, and compliance policies—enabling automated approvals, smart routing, or flagging of risky exceptions before they affect operations.</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="next-gen-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg next-gen-trigger">Shadow Mode</AccordionTrigger>
                                    <AccordionContent className="text-20 text-rg next-gen-content">Test new payment rules and automations safely in Shadow Mode by running them alongside live workflows without touching production data. It mirrors real transactions to simulate approvals and alerts, so you can refine logic, measure impact, and deploy changes with confidence.</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <span className="next-gen-gif"></span>
                    </div>
                </div>
            </section>
        </>
    );
}